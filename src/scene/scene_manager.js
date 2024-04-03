import {
    BoundingBox,
    Camera3D,
    Color,
    Engine3D,
    LitMaterial,
    MeshRenderer,
    Object3D,
    OrbitController,
    PointerEvent3D,
    Scene3D,
    SkyRenderer,
    SolidColorSky,
    Vector3,
    View3D
} from "@orillusion/core";
import SceneObject from "./scene_object.js";
import EventHandler from "../event/event_handler.js";
import Util from "../util/util.js";
import MQTTHandler from "../event/mqtt_handler.js";
import Line from "./line.js";
import KeyboardScript from "./keyboard_script.js";
import DragComponent from "./drag_component.js";
import SubscriberSingleValue from "./subscriber_single_value.js";
import CameraControl from "./camera_control.js";

/**
 * @module SceneManager
 * @fileoverview Contains SceneManager class.
 */

/**
 * @class
 * Main manager of entire scene. Responsible for managing all currently loaded objects and assets.
 */
class SceneManager {

    static MODELS = {
        "dragon": "https://cdn.orillusion.com/PBR/DragonAttenuation/DragonAttenuation.gltf",
        "table": "/glb_models/Assembly Warehouse Table.glb",
        "cart": "/glb_models/trolley cart for warehouse.glb",
        "rack": "/glb_models/JM_Rack_A.glb",
        "wall": "/glb_models/Slatwall_Bin_5.5in.glb",
        "floor": "./src/assets/glb_models/factory_floor_sample_1.glb",
        "workstation1": "/glb_models/workstation.glb",
        "workstation2": "/glb_models/Station 10x Layout v31.glb",
        "lathe": "./src/assets/glb_models/downloadsGLB/desk_lathe.glb",
        "ladder": "./src/assets/glb_models/downloadsGLB/escada_movel_-_moving_ladder.glb",
        "forklift": "./src/assets/glb_models/downloadsGLB/forklift_gameready.glb",
        "picaMachine": "./src/assets/glb_models/downloadsGLB/pica_pica_-_machines.glb",
        "robot": "./src/assets/glb_models/FANUC-430 Robot.glb",
        "bin": "./src/assets/glb_models/Slatwall_Bin_5.5in.glb",
        "tank": "./src/assets/glb_models/UN-COMPLIANT IBC TANK.glb",
        "boiler": "./src/assets/glb_models/downloadsGLB/boiler_from_the_puffer_vic_32 (1).glb",
        "roboticArm": "./src/assets/glb_models/boxarm.glb",
        "testfactory": "./src/assets/glb_models/testfactory1.glb",
        "human": "./src/assets/glb_models/human.glb",
        "shelf": "./src/assets/glb_models/shelf.glb",
        "material_bot":  "./src/assets/glb_models/material_bot.glb",
        "storage_tote":  "./src/assets/glb_models/storage_tote.glb"
        // Hidden models for editor use only

        // ".translation-handle": "/glb_models/translation_handle.glb"
    };

    /**
     * Create a new scene manager.
     * @param {Color} skyColor Color of sky (optional)
     */
    constructor({
        skyColor = new Color(200, 200, 200)
    } = {}) {
        this._skyColor = skyColor;

        this.sky = null;
        this.scene = null;
        this.view = null;

        this.camera = null;

        this.objects = new Set();
        this.revObjects = new Map();
        this._selected = new Set();

        this._pressedKeys = new Set();
        this.dragging = false;

        this.models = new Map();

        this.ids = new Map();

        this._cameraController = null;

        this._events = new EventHandler();

        this._ctrlPressed = false;

        this.moveInterval = 30;

        this.depth = 0;

        this.lastX = -1;

        this.lastY = -1;

        this.ObjectToMove = undefined;

        this.canMove = false;

        this._dragMult = 200;

        this.count = 0;

        this._mqttHandler = new MQTTHandler({
            mgr: this,
            server: true
        });

        this.editMode = true;

        this.name = '';

        this.grid = [];
        this._prevGridCenter = null;

        // localStorage.setItem('prev_files', '');

        // mongodb stuff
        this.modelsMap = {};
        this.LoadModels();
    }

    /**
     * Load models from MongoDB
     * @constructor
     */
    LoadModels() {
        // fetch('http://localhost:3000/api/loadModels', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         thing: "yes"
        //     })
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         this.modelsMap = data.models;
        //     })
        //     .catch(error => {
        //         console.error('error:', error);
        //     });
    }

    /**
     * Initialize the scene manager.
     */
    async init() {
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = "pixel";

        this.targetObj = null;
        this.matList = [];

        await Engine3D.init();

        const c  = Engine3D.inputSystem.canvas;
        c.remove();
        document.querySelector("body").prepend(c);

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        this.scene = new Scene3D();

        this.scene.envMap = new SolidColorSky(this._skyColor);

        let camObj = new Object3D();
        this.cam = camObj.addComponent(Camera3D);
        const drag = camObj.addComponent(DragComponent);
        drag.mgr = this;
        const controller = camObj.addComponent(CameraControl);
        controller.mgr = this;

        this.camera = camObj;


        this._cameraController = this.camera.addComponent(OrbitController);
        // this._cameraController.setCamera(new Vector3(0, 50, 50), new Vector3(0, 0, 0));

        // this._cameraController.moveSpeed = 30;

        this._cameraController.smooth = 0;
        this._cameraController.panFactor = 1;
        this._cameraController.wheelStep = 0.01;

        camObj.localPosition = new Vector3(0, 0, 4);

        this.cam.perspective(60, c.width / c.height, 10, 50000);

        this.scene.addChild(camObj);


        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = this.cam;

        /**
        const promises = [];
        const total = Object.keys(SceneManager.MODELS).length;
        let i = 0;

        for (const id of Object.keys(SceneManager.MODELS)) {
            const model = Engine3D.res.loadGltf(SceneManager.MODELS[id]);
            promises.push(model);

            model.then(object => {
                this.models.set(id, object)

                i++;

                let progress = 0;
                if (total !== 0)
                    progress = i / total;
                this.events.do("load_models", progress);
            });
        }

        await Promise.all(promises);

        // this.createNewObject({
        //     pos: new Vector3(),
        //     select: false
        // });
        this.view.camera = this.cam;



        for (const id of Object.keys(this.modelsMap)) {
            const model = await Engine3D.res.loadGltf(this.modelsMap[id]);
            this.models.set(id, model);
        }

            */

        // this.createNewObject(new Vector3(), false);
        // this.createNewObject({select:false,model:"testfactory",pos: new Vector3()})
        

        

        /**
         * Event listener for File Input
         */

        // WAITING ON UPLOAD PAGE
        // document.getElementById('fileInput').addEventListener('drop', (event) => {
        //     event.preventDefault()
        //     let file = event.dataTransfer.files[0]
        //
        //     if (file.type.match('application/json')) {
        //         let reader = new FileReader()
        //         reader.onloadend = (event) => {
        //             let jsonString = JSON.parse(String(event.target.result));
        //             this.LoadScene(jsonString)
        //         }
        //         reader.readAsText()
        //     }
        //     this.LoadScene()
        // })

        document.addEventListener("keydown", (event) => {
            if (Util.inputFocused())
                return;

            this._pressedKeys.add(event.key.toLowerCase());

            switch (event.key.toLowerCase()) {
                case "a": {
                    if (!event.ctrlKey)
                        break;

                    if (document.querySelector(":focus"))
                        break;

                    event.preventDefault();
                    this.selectAll();

                    break;
                }

                case "d": {
                    if (event.ctrlKey) {
                        event.preventDefault();
                        this.duplicateSelected();
                    }

                    break;
                }

                case "e": {
                    if (this.selectedCount > 0) {
                        this.events.do("drag", true);
                        this.dragging = true;
                    }
                    break;
                }

                case "end": {
                    event.preventDefault();
                    this.snapSelectedDown();

                    break;
                }

                case "f": {
                    this.focusOnSelected();
                    break;
                }

                case "i": {
                    if (!event.ctrlKey)
                        break;

                    event.preventDefault();
                    this.invertSelection();

                    break;
                }

                case "p": {
                    this.alert("Temperature above critical threshold.");
                    break;
                }

                // Create an object with 'r'
                case "r": {
                    if (event.ctrlKey) {
                        event.preventDefault();
                        this.resetCamera();
                    } else if(this.editMode){
                        this.createNewObject();
                    }

                    break;
                }
                case "s": {
                    if (!event.ctrlKey) {
                        break;
                    }
                    event.preventDefault()
                    this.saveScene()

                    break;
                }

                case "tab": {
                    if (document.querySelector(":focus"))
                        break;

                    this.clearSelection();
                    event.preventDefault();

                    break;
                }

                case "delete": {
                    if(this.editMode){
                        this.deleteSelected();
                        event.preventDefault();
                    }
                    break;
                }

                // Switches between view and edit mode
                case "q": {
                    this.editMode = !this.editMode;
                    this.events.do('switch view');
                    break;
                }

                case "control": {
                    this._ctrlPressed = true;
                    break;
                }
            }
        });

        document.addEventListener("keyup", (event) => {
            this._pressedKeys.delete(event.key.toLowerCase());

            switch (event.key.toLowerCase()) {
                case "e": {
                    this.events.do("drag", false);
                    this.dragging = false;
                    this.hideSnapGrid();

                    break;
                }

                case "control": {
                    this._ctrlPressed = false;
                    break;
                }
            }
        });

        Engine3D.startRenderView(this.view);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, e => {
            if (this.isKeyDown('e'))
                return;

            const object = this.reverseLookup(e.target);
            if (object !== null)
                object.click();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, e => {
            if (this.isKeyDown('e'))
                return;

            const object = this.reverseLookup(e.target);
            if (object !== null)
                object.mouseOver();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OUT, e => {
            const object = this.reverseLookup(e.target);
            if (object !== null)
                object.mouseOff();
        }, this);
    }

    // --------
    // Getters
    // --------

    reverseLookup(object3D) {
        if (this.revObjects.has(object3D))
            return this.revObjects.get(object3D);

        if (object3D.parentObject instanceof Object3D)
            return this.reverseLookup(object3D.parentObject);

        return null;
    }

    /**
     * Get an object in the manager by its global ID.
     * @param {string} id Global ID
     * @returns {SceneObject|null} Object with specified ID, or null if it doesn't exist.
     */
    getObjectById(id) {
        if (!this.ids.has(id))
            return null;

        return this.ids.get(id);
    }

    /**
     * Get the event handler.
     * @returns {EventHandler} Scene manager's event handler
     */
    get events() {
        return this._events;
    }

    /**
     * Get the amount of objects currently selected.
     * @returns {number} Number of objects selected
     */
    get selectedCount() {
        return this._selected.size;
    }

    /**
     * Get the forward vector of the camera.
     * @returns {Vector3} Camera's forward vector
     */
    getCameraForward() {
        if (this.camera === null)
            return new Vector3();

        return this.camera.transform.forward;
    }

    /**
     * Get the forward vector of the camera at the mouse position.
     * @returns {Vector3} Forward vector at mouse position
     */
    getMouseForward() {
        const input = Engine3D.inputSystem;
        return this.cam.screenPointToRay(input.mouseX, input.mouseY).direction;
    }

    getModelIDs() {
        return Array.from(this.models.keys());
    }

    isKeyDown(key) {
        return this._pressedKeys.has(key);
    }


    // Setters
    // --------

    /**
     * Set the color of the sky in the scene.
     * @param {Color} color New sky color
     */
    setSkyColor(color) {
        let colorSky = new SolidColorSky(color);
        this.sky = this.scene.addComponent(SkyRenderer);
        this.sky.map = colorSky;
    }

    // ------
    // Input
    // ------

    /**
     * Handle the mouse clicking on the canvas for cursor effects.
     * @param {MouseEvent} e Mouse event
     */
    startDrag(e) {
        document.body.style.cursor = "grabbing";
    }

    /**
     * Handle the mouse button being released for cursor effects.
     */
    stopDrag() {
        document.body.style.cursor = "default";
    }

    /**
     * Reset the camera position and target the center (0, 0, 0) of the scene.
     */
    resetCamera() {
        const bounds = this._getAllBounds();
        const pos = bounds.min.add(bounds.max).div(2);
        this._cameraController.target = pos;

        const mag = Util.getBoundingBoxScale(bounds);
        const dir = this.camera.transform.localPosition.subtract(pos).normalize();

        this.camera.localPosition = pos.add(dir.mul(mag));
    }

    // ----------------
    // User Interfaces
    // ----------------

    /**
     * Signal an alert to the event listener.
     * Used for displaying UI alert messages.
     * @param {string} description Description of alert
     * @param {string} id Object Identifier
     */
    alert(description = "", id = "") {
        this.events.do("alert", description, id);
    }

    // -----------------
    // Objects - Access
    // -----------------

    /**
     * Get an object by its ID.
     * @param {number} id Object ID
     * @returns {SceneObject|null} Object with desired ID, or null if none was found.
     */
    getObjectFromID(id) {
        if (!this.objects.has(id))
            return null;

        return this.objects.get(id);
    }

    /**
     * Get an array containing all objects currently in the scene.
     * @returns {SceneObject[]} Array of all objects
     */
    getAllObjects() {
        return Array.from(this.objects.values());
    }

    // -------------------
    // Objects - Creation
    // -------------------

    /**
     * Create a new basic object and add it to the scene.
     * @param {Vector3} pos Initial position of object (optional)
     * @param {boolean} select Whether to select object after adding
     * @param {string} model ID/name of mesh to use
     */
    createNewObject({
        pos = null,
        select = true,
        model = ""
    } = {}) {
        if (pos === null)
            pos = this.getMouseForward().mul(256).add(this.camera.transform.worldPosition);

        const object = new SceneObject.SceneObject({
            manager: this,
            pos: pos,
            model: model
        });

        this.addObject(object);

        if (select)
            object.select();

        return object;
    }

    /** 
     * Creates new Line object
     * @param {SceneManager} manager Parent scene manager
     * @param {[Vector3]} points List of points in the line
    */
    createLine(points=[]) {
        return new Line({manager: this, points: points});
    }

    /**
     * Add an object to the scene.
     * @param {SceneObject} object Object to add
     */
    addObject(object) {
        this.objects.add(object);

        this.scene.addChild(object.getObject3D());
        this.revObjects.set(object.getObject3D(), object);

        this.events.do("add", object);
    }

    // -----------------------
    // Scene Saving & Loading
    // -----------------------

    /**
     * Save scene information to JSON.
     * @returns JSON Downloadable JSON file
     */
    saveScene() {
        let currentScene = this.getAllObjects().map(obj => obj.serializeObject())
        let jsonString = JSON.stringify(currentScene, null, 3)

        let prev_files = localStorage.getItem('prev_files');
        prev_files += ',' + this.name;
        localStorage.setItem('prev_files', prev_files);
        localStorage.setItem(this.name, jsonString);

        let sceneBlob = new Blob([jsonString], {type: "application/json"})
        const blobUrl = URL.createObjectURL(sceneBlob);

        // Create element to do a click event for blobUrl
        const downloadLink = document.createElement("a")
        downloadLink.href = blobUrl

        // Need to add for it to ask for file name if none set
        let saveName = "scene"
        downloadLink.download = `${this.name}.json`
        downloadLink.click()

        // Remove the URL from usage
        URL.revokeObjectURL(blobUrl)

        try {
            const response = fetch('http://localhost:9000/Factory_Floors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sceneData: jsonString })
            });
    
            if (response.ok) {
                console.log('Scene saved successfully to server.');
            } else {
                console.error('Failed to save scene to server.');
            }
        } catch (error) {
            console.error('Error saving scene to server:', error);
        }
    }

    uploadModel(name, file, onDone = () => {}) {
        try {
            const formData = new FormData();
            formData.append("modelName", name);
            formData.append("modelData", file);

            const response = fetch("http://localhost:9000/Upload_Model", {
                method: "POST",
                body: formData
            }).then(() => {
                onDone();
            });

            console.log(response)

            if (response.ok) {
                console.log('Model saved successfully to server.');
            } else {
                console.error('Failed to save model to server.');
            }
        } catch (error) {
            console.error("Error saving model to server:", error);
        }
    }


    /**
     * Load scene information from JSON
     */
    async loadScene(fileName, sceneData) {
        this.name = fileName;

        if (sceneData === null) {
            this.events.do("load_models", 1);
            return;
        }

        const models = new Set();
        for (const object of sceneData)
            if (object.objInfo.model !== "")
                models.add(object.objInfo.model);

        for (const id of this.models.keys()) {
            if (models.has(id)) {
                models.delete(id);
            } else {
                this.models.delete(id);
            }
        }

        const toGet = Array.from(models.values());

        const promises = [];
        for (const id of toGet)
            promises.push(fetch("http://localhost:9000/Get_Model", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    modelName: id
                })
            }));

        await Promise.all(promises)
            .then(responses => Promise.all(responses.map(res => res.blob())))
            .then(async blobs => {
                const loadPromises = [];

                let i = 0;

                blobs.forEach(blob => {
                    const url = URL.createObjectURL(blob);
                    const promise = Engine3D.res.loadGltf(url);

                    const id = toGet[i];
                    const n = i;
                    promise.then(model => {
                        this.models.set(id, model);
                        this.events.do("load_models", n / toGet.length);
                    });

                    loadPromises.push(promise);

                    i++;
                });

                await Promise.all(loadPromises);
            });

        this.events.do("load_models", 1);

        this.clearObjects();

        for (let object of sceneData) {
            const sceneObj = new SceneObject.SceneObject({
                manager: this,
                id: object.objInfo.id,
                model: object.objInfo.model,
                locked: object.objInfo.locked,
                //transformers: object.subscribers.transformers
            });

            sceneObj.pos = new Vector3(object.objInfo.pos.x, object.objInfo.pos.y, object.objInfo.pos.z);
            sceneObj.rot = new Vector3(object.objInfo.rot.x, object.objInfo.rot.y, object.objInfo.rot.z);
            sceneObj.scale = new Vector3(object.objInfo.scale.x, object.objInfo.scale.y, object.objInfo.scale.z);

            for (let subType in object.subscribers.singleValue) {
                const subInfo = object.subscribers.singleValue[subType];
                const subscriber = new SubscriberSingleValue(
                    sceneObj,
                    subType,
                    subInfo.min,
                    subInfo.max,
                    subInfo.gradient
                );

                sceneObj.addSubscriber(subscriber);
            }

            this.addObject(sceneObj);
        }

        this.cam.transform.localPosition.y += 2048;
        this.resetCamera();
    }

    async getSceneFromDB(name) {
        await fetch("http://localhost:9000/Get_Floor", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                floorName: name
            })
        })
            .then(res => res.json())
            .then(data => {
                this.loadScene(name, data);
            });
    }

    getModelFromDB(id, onDone = () => {}) {
        this.events.do("load_model", 0);

        fetch("http://localhost:9000/Get_Model", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                modelName: id
            })
        })
            .then(response => response.blob())
            .then(async blob => {
                const url = URL.createObjectURL(blob);
                const model = await Engine3D.res.loadGltf(url, {
                    onProgress: (curr, total) => {
                        this.events.do("load_models", curr / total);
                    }
                });

                this.models.set(id, model);
                this.events.do("load_models", 1);

                onDone();
            });
    }

    // -------------------
    // Objects - Deletion
    // -------------------

    /**
     * Remove an object from the scene.
     * @param {SceneObject} object Object to remove
     */
    removeObject(object) {
        this.objects.delete(object);
        this.revObjects.delete(object.getObject3D());

        if (this._selected.has(object))
            this.deselect(object);

        this.events.do("delete", object);
    }

    /**
     * Delete all objects from the scene.
     */
    clearObjects() {
        for (const object of this.objects.values())
            object.delete();
    }

    // --------------------
    // Objects - Selection
    // --------------------

    /**
     * Select an object. Will add to group selection if control is pressed.
     * @param {SceneObject} object Object to select
     */
    select(object) {
        if (!this._ctrlPressed) {
            this.clearSelection();
            this._selected.add(object);
        } else {
            if (this._selected.has(object))
                this._selected.delete(object);
            else {
                this._selected.add(object);
            }
        }

        this.events.do("select", Array.from(this._selected.values()));

        if (!object.getObject3D().hasComponent(KeyboardScript)) {
            const ks = object.getObject3D().addComponent(KeyboardScript);
            ks.mgr = this;
            ks.object = object;
        }

        this.updateSelectBox();
    }

    /**
     * Select all objects.
     */
    selectAll() {
        this._selected.clear();
        this.objects.forEach(object => this._selected.add(object));

        this.updateSelectBox();
        this.events.do("select", this.getSelected());
    }

    /**
     * Deselect the objects currently selected and select those that are not.
     */
    invertSelection() {
        const notSelected = new Set(this.objects);
        notSelected.forEach(object => {
            if (this._selected.has(object))
                notSelected.delete(object);
        });

        this._selected.clear();

        this._selected = notSelected;

        this.updateSelectBox();
        this.events.do("select", this.getSelected())
    }

    /**
     * Get an array of all currently selected objects.
     * @returns {SceneObject[]} Array of selected objects
     */
    getSelected() {
        return Array.from(this._selected.values());
    }

    /**
     * Get the first object that is selected.
     * @returns {SceneObject} First selected object
     */
    getFirstSelected() {
        if (this.selectedCount === 0)
            return null;

        return Array.from(this._selected.values())[0];
    }

    /**
     * Deselect an object.
     * @param {SceneObject} object Object to deselect
     */
    deselect(object) {
        this._selected.delete(object);

        this.events.do("select", Array.from(this._selected.values()));

        this.updateSelectBox();
    }

    /**
     * Deselect all objects.
     */
    clearSelection() {
        this._selected.clear();

        this.events.do("select", Array.from(this._selected.values()));

        this.updateSelectBox();
    }

    /**
     * Delete all currently selected objects.
     */
    deleteSelected() {
        for (const object of this._selected.values())
            object.delete();
    }

    /**
     * Duplicate all selected objects.
     * @param {boolean} select Whether to select duplicated objects (true by default)
     */
    duplicateSelected(select = true) {
        if (this.selectedCount === 0)
            return;

        const toDuplicate = Array.from(this._selected.values());
        this.clearSelection();

        for (const obj of toDuplicate) {
            const newObj = obj.duplicate();
            if (select)
                this._selected.add(newObj);
        }

        if (select) {
            this.updateSelectBox();
            this.events.do("select", Array.from(this._selected.values()));
        }
    }

    /**
     * Focus/target camera on currently selected objects.
     */
    focusOnSelected() {
        if (this.selectedCount === 0)
            return;

        const bounds = this.getSelectedBounds();
        const pos = bounds.min.add(bounds.max).div(2);
        this._cameraController.target = pos;

        const mag = Util.getBoundingBoxScale(bounds) * 2;
        const dir = this.camera.transform.localPosition.subtract(pos).normalize();

        this.camera.localPosition = pos.add(dir.mul(mag));
    }

    /**
     * Check if an object is currently selected.
     * @param {SceneObject} object Object to check for
     * @returns {boolean} Whether object is currently selected
     */
    isSelected(object) {
        return this._selected.has(object);
    }

    /**
     * Update the visual selection indicator.
     */
    updateSelectBox() {
        this.view.graphic3D.Clear("selection");
        if (this.selectedCount === 0)
            return;

        const bb = this.getSelectedBounds();

        this.view.graphic3D.drawBox("selection", bb.min, bb.max);
    }

    /**
     * Get the bounding box containing all the bounding boxes of selected objects.
     * @returns {BoundingBox}
     * @private
     */
    getSelectedBounds() {
        let bb = null;

        for (const object of this._selected.values()) {
            if (bb === null)
                bb = object.getBoundingBox();
            else
                bb.merge(object.getBoundingBox());
        }

        if (bb === null)
            return new BoundingBox();

        return bb;
    }

    /**
     * Get the bounding box containing all the bounding boxes of all objects in the scene.
     * @returns {BoundingBox} Total bounding box
     * @private
     */
    _getAllBounds() {
        let bb = null;

        for (const object of this.objects.values()) {
            if (bb === null)
                bb = object.getBoundingBox();
            else
                bb.merge(object.getBoundingBox());
        }

        if (bb === null)
            return new BoundingBox();

        return bb;
    }

    snapSelectedDown() {
        if (this.selectedCount === 0)
            return;

        for (const object of this.getSelected())
            object.snapDown();
    }

    _onMouseDown(e) {
        if (e.mouseCode === 2) {
            this.lastTime = Date.now();
            this.canMove = true;
            const pos = this.cam.screenPointToWorld(e.mouseX, e.mouseY, 0);
            this.lastX = pos.x;
            this.lastY = pos.y;
            this.lastZ = pos.z;
        }
    }

    _onMouseMove(e){
        // If right mouse is being clicked on a movable object then continue else return
        if (this.canMove && this.ObjectToMove !== undefined){
            // Stop camera movement with mouse
            e.stopImmediatePropagation();

            // Update the position of the selected object to the mouse position
            const now = Date.now();
            if (now - this.lastTime > this.moveInterval) {
                this.lastTime = now;
                const pos = this.cam.screenPointToWorld(e.mouseX, e.mouseY, 0);
                this.ObjectToMove.setX(this.ObjectToMove.getObject3D().x + (pos.x - this.lastX) * this._dragMult);
                this.ObjectToMove.setY(this.ObjectToMove.getObject3D().y + (pos.y - this.lastY) * this._dragMult);
                this.ObjectToMove.setZ(this.ObjectToMove.getObject3D().z + (pos.z - this.lastZ) * this._dragMult);
                this.lastX = pos.x;
                this.lastY = pos.y;
                this.lastZ = pos.z;

            }
        }
    }

    _onMouseUp(e){
        this.ObjectToMove = undefined;
        this.canMove = false;
    }

    showSnapGrid(center, gap) {
        if (this._prevGridCenter !== null && this._prevGridCenter.equals(center))
            return;

        this.hideSnapGrid();

        const count = 6;

        const color = new Color(0.2, 0.5, 1);

        for (let x = -count; x < count; x++) {
            for (let z = -count; z < count; z++) {
                const uuid = "grid-" + x + "-" + z;
                this.grid.push(uuid);

                const c1 = new Vector3(x * gap, 0, z * gap);
                const c3 = new Vector3((x + 1) * gap, 0, (z + 1) * gap);

                const c2 = new Vector3(c1.x, 0, c3.z);
                const c4 = new Vector3(c3.x, 0, c1.z);

                const points = [
                    c1.add(center),
                    c2.add(center),
                    c3.add(center),
                    c4.add(center),
                    c1.add(center)
                ];

                const cc = color.clone();
                cc.a = Math.sqrt(x ** 2 + z ** 2) / count;

                this.view.graphic3D.drawLines(uuid, points, cc);
            }
        }
    }

    hideSnapGrid() {
        if (this.grid.length > 0) {
            for (const graphic of this.grid)
                this.view.graphic3D.Clear(graphic);
        }

        this.grid = [];
        this._prevGridCenter = null;
    }
}

export default SceneManager;

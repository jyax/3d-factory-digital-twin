import {
    ComponentBase,
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
    View3D,
    FlyCameraController,
    AtmosphericComponent,
    KeyEvent,
    KeyCode
} from "@orillusion/core";
import SceneObject from "./scene_object.js";
import EventHandler from "../event/event_handler.js";
import Util from "../util/util.js";
import MQTTHandler from "../event/mqtt_handler.js";
import Line from "./line.js";
import keyboardScript from "./keyboardScript.js";
import KeyboardScript from "./keyboard_component.js";
import DragComponent from "./drag_component.js";

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
        "roboticArm": "./src/assets/glb_models/downloadsGLB/black_honey_-_robotic_arm (1).glb",
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
            server: false
        });

        this.editMode = true;

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

        this.camera = camObj;


        this._cameraController = this.camera.addComponent(OrbitController);
        // this._cameraController.setCamera(new Vector3(0, 50, 50), new Vector3(0, 0, 0));

        // this._cameraController.moveSpeed = 30;

        this._cameraController.smooth = 0;
        this._cameraController.panFactor = 0.01;
        this._cameraController.wheelStep = 0.01;

        camObj.localPosition = new Vector3(0, 0, 4);

        this.cam.perspective(60, c.width / c.height, 0.1, 5000);

        this.scene.addChild(camObj);


        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = this.cam;

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

        this.createNewObject({
            pos: new Vector3(),
            select: false
        });
        this.view.camera = this.cam;



        for (const id of Object.keys(this.modelsMap)) {
            const model = await Engine3D.res.loadGltf(this.modelsMap[id]);
            this.models.set(id, model);
        }

        this.createNewObject(new Vector3(), false);

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

            switch (event.key) {
                case "a": {
                    if (!event.ctrlKey)
                        break;

                    if (document.querySelector(":focus"))
                        break;

                    event.preventDefault();
                    this.selectAll();

                    break;
                }

                case "e": {
                    if (this.selectedCount > 0) {
                        this.events.do("drag", true);
                        this.dragging = true;
                    }
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
                    if (event.ctrlKey) {
                        event.preventDefault()
                        this.saveScene()
                    }
                    break
                }

                case "Tab": {
                    if (document.querySelector(":focus"))
                        break;

                    this.clearSelection();
                    event.preventDefault();

                    break;
                }

                case "Delete": {
                    if(this.editMode){
                        this.deleteSelected();
                        event.preventDefault();
                    }
                    break;
                }

                // Switches between view and edit mode
                case "q": {
                    this.editMode = !this.editMode;
                    console.log(this.editMode);
                    this.events.do('switch view');
                }

                case "Control": {
                    this._ctrlPressed = true;
                    break;
                }
            }
        });

        document.addEventListener("keyup", (event) => {
            this._pressedKeys.delete(event.key.toLowerCase());

            switch (event.key) {
                case "e": {
                    this.events.do("drag", false);
                    this.dragging = false;
                    break;
                }

                case "Control": {
                    this._ctrlPressed = false;
                    break;
                }
            }
        });

        Engine3D.startRenderView(this.view);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, e => {
            if (this.isKeyDown('e'))
                return;

            const object = this.revObjects.get(e.target);
            object.click();
        }, this);
        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, e => {
            const object = this.revObjects.get(e.target);
            object.mouseOver();
        }, this);
        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OUT, e => {
            const object = this.revObjects.get(e.target);
            object.mouseOff();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_DOWN, e => this._onMouseDown(e), this);
        this.view.pickFire.addEventListener(PointerEvent3D.PICK_UP, e => this._onMouseUp(e), this);
        this.view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, e => this._onMouseMove(e), this);
    }

    // --------
    // Getters
    // --------

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
            pos = this.getMouseForward().mul(8).add(this.camera.transform.worldPosition);

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

        let sceneBlob = new Blob([jsonString], {type: "application/json"})
        const blobUrl = URL.createObjectURL(sceneBlob);

        // Create element to do a click event for blobUrl
        const downloadLink = document.createElement("a")
        downloadLink.href = blobUrl

        // Need to add for it to ask for file name if none set
        let saveName = "scene"
        downloadLink.download = `${saveName}.json`
        downloadLink.click()

        // Remove the URL from usage
        URL.revokeObjectURL(blobUrl)
    }

    /**
     * Load scene information from JSON
     */
    LoadScene(sceneFile) {
        this.clearObjects()
        for (const objectInfo in sceneFile) {
            const object = new SceneObject.SceneObject({
                manager: this,
                pos: new Vector3(objectInfo.pos.x,
                                objectInfo.pos.y,
                                objectInfo.pos.z),
                id: objectInfo.id,
                name: objectInfo.name,
                model: objectInfo.modelID,
                locked: objectInfo.locked
            })

            this.addObject(object)
        }
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
        // console.log(object);
        const ks = object.getObject3D().addComponent(keyboardScript);
        ks.mgr = this;

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

        const bounds = this._getSelectedBounds();
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

        const bb = this._getSelectedBounds();

        this.view.graphic3D.drawBox("selection", bb.min, bb.max);
    }

    /**
     * Get the bounding box containing all the bounding boxes of selected objects.
     * @returns {BoundingBox}
     * @private
     */
    _getSelectedBounds() {
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
    _onOver(e) {
        console.log('onOver: Name-', this.revObjects);
        // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
        // let node = e.target;
        // while(node.parent.parent != null)
        // {
        //     // console.log('parent', node.name);
        //     node = node.parent.object3D;
        //     // console.log('parent', node.name);
        // }
        // this.targetObj = node;
        // // console.log("target object", this.targetObj.name);
        // if(this.targetObj.numChildren > 0){
        //     this.targetObj.forChild((n) => {
        //         if (n.hasComponent(MeshRenderer)) {
        //             let mr = n.getComponent(MeshRenderer);
        //             this.mat1 = mr.material;
        //             this.matList.push(mr.material);
        //             let colorMat = new LitMaterial();
        //             colorMat.baseColor = new Color(5, 5, 5, 0.5);
        //             mr.material = colorMat;
        //         }
        //     });
        // }
        // else{
        //     let mr = this.targetObj.getComponent(MeshRenderer);
        //     this.mat1 = mr.material;
        //     let colorMat = new LitMaterial();
        //     colorMat.baseColor = new Color(5, 5, 5, 0.5);
        //     mr.material = colorMat;
        // }
    }

    /**
     * (OLD) Handles when the mouse is no longer hovering over an object.
     * @param e Event
     * @private
     */
    _onOut(e) {
        console.log('onOut', e.target.name, e.data.pickInfo);
        if(this.targetObj.numChildren > 0){
            let i  = this.matList.length - 1;
            this.targetObj.forChild((n) => {
                if (n.hasComponent(MeshRenderer)) {
                    console.log("node", n.name);
                    let mr = n.getComponent(MeshRenderer);
                    let colorMat1 = new LitMaterial();
                    colorMat1.baseColor = Color.COLOR_BLUE;
                    // mr.material = this.mat1;
                    mr.material = this.matList[i];
                    i = i - 1;
                }
            });
        }
        else{
            let obj = e.target;
            let mr = obj.getComponent(MeshRenderer);
            let colorMat1 = new LitMaterial();
            colorMat1.baseColor = Color.COLOR_RED;
            mr.material = this.mat1;
        }
    }

    _onMouseDown(e) {
        if (e.mouseCode === 2) {
            // console.log("Scene click down");
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
        // console.log("Up");
        this.ObjectToMove = undefined;
        this.canMove = false;
    }
}

export default SceneManager;

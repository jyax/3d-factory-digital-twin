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
import Util from "../util/Util.js";
import MQTTHandler from "../event/mqtt_handler_new.js";

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
        //"dragon": "https://cdn.orillusion.com/PBR/DragonAttenuation/DragonAttenuation.gltf",
        //"table": "/glb_models/Assembly Warehouse Table.glb",
        //"cart": "/glb_models/trolley cart for warehouse.glb",
        //"rack": "/glb_models/JM_Rack_A.glb",
        //"wall": "/glb_models/Slatwall_Bin_5.5in.glb",
        //"floor": "/glb_models/factory_floor_sample_1.glb",
        //"workstation1": "/glb_models/workstation.glb",
        //"workstation1_whole": "/glb_models/workstation_whole.glb",
        //"workstation2": "/glb_models/Station 10x Layout v31.glb",

        // Hidden models for editor use only

        ".translation-handle": "/glb_models/translation_handle.glb"
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

        this.models = new Map();

        this.ids = new Map();

        this._cameraController = null;

        this._events = new EventHandler();

        this._ctrlPressed = false;

        this._mqttHandler = new MQTTHandler({
            mgr: this
        });
    }

    /**
     * Initialize the scene manager.
     */
    async init() {
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = "pixel";

        this.targetObj = null;
        this.matList = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        await Engine3D.init();

        const c  = Engine3D.inputSystem.canvas;
        c.remove();
        document.querySelector("body").prepend(c);

        this.scene = new Scene3D();

        this.scene.envMap = new SolidColorSky(this._skyColor);

        let camObj = new Object3D();
        let cam = camObj.addComponent(Camera3D);
        this.camera = camObj;

        this._cameraController = this.camera.addComponent(OrbitController);
        this._cameraController.smooth = 0;
        this._cameraController.panFactor = 0.01;
        this._cameraController.wheelStep = 0.01;

        camObj.localPosition = new Vector3(0, 0, 4);

        cam.perspective(60, c.width / c.height, 0.1, 5000);

        this.scene.addChild(camObj);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = cam;

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

        this.createNewObject(new Vector3(), false);

        document.addEventListener("keydown", (event) => {
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

                case "r": {
                    if (event.ctrlKey) {
                        event.preventDefault();
                        this.resetCamera();
                    } else
                        this.createNewObject();

                    break;
                }

                case "Tab": {
                    if (document.querySelector(":focus"))
                        break;

                    this.clearSelection();
                    event.preventDefault();

                    break;
                }

                case "Delete": {
                    this.deleteSelected();
                    event.preventDefault();

                    break;
                }

                case "Control": {
                    this._ctrlPressed = true;
                    break;
                }
            }
        });

        document.addEventListener("keyup", (event) => {
            if (event.key === "Control")
                this._ctrlPressed = false;
        });

        Engine3D.startRenderView(this.view);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, e => {
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
    }


    // Getters

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


    // Setters

    /**
     * Set the color of the sky in the scene.
     * @param {Color} color New sky color
     */
    setSkyColor(color) {
        let colorSky = new SolidColorSky(color);
        this.sky = this.scene.addComponent(SkyRenderer);
        this.sky.map = colorSky;
    }


    // Input

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


    // User Interface

    /**
     * Signal an alert to the event listener.
     * Used for displaying UI alert messages.
     * @param {string} description Description of alert
     * @param {string} id Object Identifier
     */
    alert(description = "", id = "") {
        this.events.do("alert", description, id);
    }


    // Objects - Access

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


    // Objects - Creation

    /**
     * Create a new basic object and add it to the scene.
     * @param {Vector3} pos Initial position of object (optional)
     * @param {boolean} select Whether to select object after adding
     */
    createNewObject(pos = null, select = true) {
        if (pos === null)
            pos = this.getCameraForward().mul(8).add(this.camera.transform.worldPosition);

        const object = new SceneObject({
            manager: this,
            pos: pos
        });

        this.addObject(object);

        if (select) {
            object.select();
            this.focusOnSelected();
        }
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


    // Objects - Deletion

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


    // Objects - Selection

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


    // Objects - Interaction (OLD, do not remove yet)

    /**
     * (OLD) Handles when the mouse hovers over an object.
     * @param e Event
     * @private
     */
    _onOver(e) {
        console.log('onOver: Name-', e.target.name, e.data.pickInfo);
        // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
        let node = e.target;
        while(node.parent.parent != null)
        {
            // console.log('parent', node.name);
            node = node.parent.object3D;
            // console.log('parent', node.name);
        }
        this.targetObj = node;
        // console.log("target object", this.targetObj.name);
        if(this.targetObj.numChildren > 0){
            this.targetObj.forChild((n) => {
                if (n.hasComponent(MeshRenderer)) {
                    let mr = n.getComponent(MeshRenderer);
                    this.mat1 = mr.material;
                    this.matList.push(mr.material);
                    let colorMat = new LitMaterial();
                    colorMat.baseColor = new Color(5, 5, 5, 0.5);
                    mr.material = colorMat;
                }
            });
        }
        else{
            let mr = this.targetObj.getComponent(MeshRenderer);
            this.mat1 = mr.material;
            let colorMat = new LitMaterial();
            colorMat.baseColor = new Color(5, 5, 5, 0.5);
            mr.material = colorMat;
        }
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
}

export default SceneManager;
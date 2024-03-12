import {
    BoundingBox,
    Camera3D,
    Color,
    Engine3D,
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
import MQTTHandler from "../event/mqtt_handler.js";
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
        //"table": "/glb_models/Assembly Warehouse Table.glb",
        //"cart": "/glb_models/trolley cart for warehouse.glb",
        //"rack": "/glb_models/JM_Rack_A.glb",
        "bin": "/glb_models/Slatwall_Bin_5.5in.glb",
        "floor": "/glb_models/factory_floor_sample_1.glb",

        "chair": "/glb_models/metal_folding_chair.glb",
        "desk": "/glb_models/metal_desk.glb",
        "lamp": "/glb_models/vintage_desk_lamp.glb"
    };

    static ROTATIONS = {
        "table": new Vector3(-90, 0, 0)
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
        this.cam = null;

        this.objects = new Set();
        this.revObjects = new Map();
        this._selected = new Set();

        this.dragging = false;

        this.models = new Map();

        this.ids = new Map();

        this._cameraController = null;

        this._events = new EventHandler();

        this._ctrlPressed = false;

        this._pressedKeys = new Set();

        this._mqttHandler = new MQTTHandler({
            mgr: this,
            server: false
        });
    }

    /**
     * Initialize the scene manager.
     */
    async init() {
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = "pixel";

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
        const dc = camObj.addComponent(DragComponent);
        dc.mgr = this;
        this.camera = camObj;

        this.camera.addEventListener(Event)

        this._cameraController = this.camera.addComponent(OrbitController);
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
                if (id in SceneManager.ROTATIONS)
                    object.localRotation = SceneManager.ROTATIONS[id].clone();

                this.models.set(id, object);

                i++;

                let progress = 0;
                if (total !== 0)
                    progress = i / total;
                this.events.do("load_models", progress);
            });
        }

        await Promise.all(promises);

        this.createNewObject({
            pos: new Vector3()
        });

        setTimeout(() => {
            this.resetCamera();
        }, 1);

        document.addEventListener("keydown", (event) => {
            if (document.querySelector(":focus"))
                return;

            this._pressedKeys.add(event.key.toLowerCase());

            switch (event.key) {
                case "a": {
                    if (!event.ctrlKey)
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

    /**
     * Get the forward vector of the camera at the mouse position.
     * @returns {Vector3} Forward vector at mouse position
     */
    getMouseForward() {
        const input = Engine3D.inputSystem;
        return this.cam.screenPointToRay(input.mouseX, input.mouseY).direction;
    }

    /**
     * Check if a key is currently pressed.
     * @param {string} key Key to check
     * @returns {boolean} Whether key is down
     */
    isKeyDown(key) {
        return this._pressedKeys.has(key.toLowerCase());
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


    // User Interfaces

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
     * @param {string} model ID/name of mesh to use
     * @returns {SceneObject} Created object
     */
    createNewObject({
        pos = null,
        select = true,
        model = ""
    } = {}) {
        if (pos === null)
            pos = this.getMouseForward().mul(8).add(this.camera.transform.worldPosition);

        const object = new SceneObject({
            manager: this,
            pos: pos,
            model: model
        });

        this.addObject(object);

        if (select) {
            object.select();
            //this.focusOnSelected();
        }

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

        this.scene.notifyChange();

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
        if (this.dragging)
            return;

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

    _onMouseDown(e) {
        if (e.mouseCode === 0 && this.isKeyDown('e')) {
            const ray = this.cam.screenPointToRay(e.mouseX, e.mouseY);
        }
    }

    _onMouseUp(e){
        this.objectToMove = null;
        this.canMove = false;
    }


    _onMouseMove(e){

        // If right mouse is being clicked on a movable object then continue else return
        if (this.canMove && this.objectToMove != null) {
            // Stop camera movement with mouse
            e.stopImmediatePropagation();

            // Update the position of the selected object to the mouse position
            const now = Date.now();
            if (now - this.lastTime > this.moveInterval) {
                this.lastTime = now;
                const pos = this.camera.screenPointToWorld(e.mouseX, e.mouseY, 0);
                this.objectToMove.setX(this.objectToMove.getObject3D().x + (pos.x - this.lastX) * this._dragMult);
                this.objectToMove.setY(this.objectToMove.getObject3D().y + (pos.y - this.lastY) * this._dragMult);
                this.objectToMove.setZ(this.objectToMove.getObject3D().z + (pos.z - this.lastZ) * this._dragMult);
                this.lastX = pos.x;
                this.lastY = pos.y;
                this.lastZ = pos.z;
            }
        }
    }
}

export default SceneManager;
import {
    AtmosphericComponent,
    Camera3D, Color,
    Engine3D, LitMaterial, MeshRenderer,
    Object3D, OrbitController,
    Scene3D, SkyRenderer, SolidColorSky, Vector3, View3D
} from "@orillusion/core";
import SceneObject from "./scene_object.js";
import EventHandler from "../event/event_handler.js";

/**
 * @module SceneManager
 * @fileoverview Contains SceneManager class.
 */

/**
 * @class
 * Main manager of entire scene. Responsible for managing all currently loaded objects and assets.
 */
class SceneManager {
    /**
     * Create a new scene manager.
     * @param {Color} skyColor Color of sky (optional)
     */
    constructor({
        skyColor = Color.hexRGBColor(0x44495e)
    } = {}) {
        this._skyColor = skyColor;

        this.sky = null;
        this.scene = null;

        this.camera = null;

        this.objects = new Set();
        this._selected = new Set();

        this.ids = new Map();

        this._cameraController = null;

        this._events = new EventHandler();

        this._ctrlPressed = false;
    }

    /**
     * Initialize the scene manager.
     * @param canvas Reference to desired HTML canvas
     */
    init({
        canvas
    } = {}) {
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = "bound";

        this.targetObj = null;
        this.matList = [];

        Engine3D.init({
            canvasConfig:  { canvas }
        }).then(() => {
            this.scene = new Scene3D();

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            this.scene.envMap = new SolidColorSky(new Color(200, 200, 200));

            //let sky = this.scene.addComponent(AtmosphericComponent);
            //sky.sunY = 1;

            let camObj = new Object3D();
            let cam = camObj.addComponent(Camera3D);
            this.camera = camObj;

            this._cameraController = this.camera.addComponent(OrbitController);
            this._cameraController.smooth = false;
            this._cameraController.panFactor = 0.025;
            this._cameraController.wheelStep = 0.01;

            camObj.localPosition = new Vector3(0, 0, 4);

            cam.perspective(60, canvas.width / canvas.height, 0.1, 5000);

            this.scene.addChild(camObj);

            this.createNewObject(new Vector3());

            let view = new View3D();
            view.scene = this.scene;
            view.camera = cam;
            Engine3D.startRenderView(view);

            document.addEventListener("keydown", (event) => {
                if (event.key === "r")
                    this.createNewObject();

                else if (event.key === "Tab") {
                    if (document.querySelector(":focus"))
                        return;

                    this.clearSelection();
                    event.preventDefault();
                }

                else if (event.key === "Delete") {
                    this.deleteSelected();
                    event.preventDefault();
                }

                else if (event.key === "Control")
                    this._ctrlPressed = true;
            });

            document.addEventListener("keyup", (event) => {
                if (event.key === "Control")
                    this._ctrlPressed = false;
            });
        });
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
     */
    createNewObject(pos = null) {
        if (pos === null)
            pos = this.getCameraForward().mul(8).add(this.camera.localPosition);

        const object = new SceneObject({
            manager: this,
            pos: pos
        });

        this.addObject(object);
    }

    /**
     * Add an object to the scene.
     * @param {SceneObject} object Object to add
     */
    addObject(object) {
        this.objects.add(object);

        this.scene.addChild(object.getObject3D());

        this.events.do("add", object);
    }


    // Objects - Deletion

    /**
     * Remove an object from the scene.
     * @param {SceneObject} object Object to remove
     */
    removeObject(object) {
        this.objects.delete(object);

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
        if (!this._ctrlPressed)
            this.clearSelection();

        this._selected.add(object);

        this.events.do("select", Array.from(this._selected.values()));
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
    }

    /**
     * Deselect all objects.
     */
    clearSelection() {
        this._selected.clear();

        this.events.do("select", Array.from(this._selected.values()));
    }

    /**
     * Delete all currently selected objects.
     */
    deleteSelected() {
        for (const object of this._selected.values())
            object.delete();
    }

    /**
     * Check if an object is currently selected.
     * @param {SceneObject} object Object to check for
     * @returns {boolean} Whether object is currently selected
     */
    isSelected(object) {
        return this._selected.has(object);
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
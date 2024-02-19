import {
    BoundingBox,
    BoxColliderShape,
    BoxGeometry,
    ColliderComponent,
    Color,
    Engine3D,
    LitMaterial,
    MeshRenderer,
    Object3D,
    PointerEvent3D,
    Scene3D,
    Vector3
} from "@orillusion/core";
import EventHandler from "../event/event_handler.js";

/**
 * @module SceneObject
 * @fileoverview Contains SceneObject class.
 */

/**
 * @class
 * Wrapper class for Orillusion Object3D.
 * Allows for easy management and manipulation.
 */
class SceneObject {
    /**
     * Create a new scene object.
     * @param {SceneManager} manager Parent scene manager
     * @param {Vector3} pos Initial position (optional)
     * @param {string} id Global ID (optional)
     * @param {string} name Name of object (optional)
     * @param {string} modelID ID of model/mesh to use (optional)
     */
    constructor({
        manager,
        pos = new Vector3(),
        id = "",
        name = "",
        model: modelID = ""
    } = {}) {
        this._manager = manager;

        this._id = id;
        if (this._id !== "")
            this.mgr.ids.set(this._id, this);

        this.name = name;

        this.modelID = modelID;

        let mesh;

        this._object = new Object3D();

        if (modelID === "") {
            //let data = Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/desk_lathe.glb');
            //this._object.addChild(data);
            //mesh = this._object.addComponent(MeshRenderer);
            // mesh.geometry = new BoxGeometry();
            // mesh.material = new LitMaterial();
            // mesh.material.baseColor = new Color(0.2, 0.5, 1);
            // mesh.material.roughness = 1;
            // mesh.material.metallic = 0;
            
        } else {
            this._object.addChild(this.mgr.models.get(modelID).clone());
        }

        this._object.transform.localPosition = pos;

        const col = this._object.addComponent(ColliderComponent);
        col.shape = new BoxColliderShape()
            .setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(1, 1, 1));

        this.forAll(obj => {
            obj.addEventListener(PointerEvent3D.PICK_MOVE, this._mouseOver, this);
            obj.addEventListener(PointerEvent3D.PICK_OUT, this._mouseOff, this);
            obj.addEventListener(PointerEvent3D.PICK_CLICK, this._click, this);
            
        });

        this._events = new EventHandler();
    }


    // Deletion

    /**
     * Delete the object and remove it from the scene manager.
     */
    delete() {
        this._object.destroy();

        this.mgr.removeObject(this);
    }


    // Getters

    /**
     * Get the scene manager.
     * @returns {SceneManager} Parent scene manager
     */
    get mgr() {
        return this._manager;
    }

    /**
     * Get the global ID.
     * @returns {string} Global ID
     */
    get id() {
        return this._id;
    }

    /**
     * Get the event handler.
     * @returns {EventHandler} Event handler
     */
    get events() {
        return this._events;
    }

    /**
     * Get the Orillusion Object3D.
     * @returns {Object3D} Orillusion Object3D
     */
    getObject3D() {
        return this._object;
    }

    /**
     * Check if the object is currently selected.
     * @returns {boolean} Whether object is selected
     */
    isSelected() {
        return this._manager.isSelected(this);
    }

    /**
     * Get the bounding box of the object.
     */
    getBoundingBox() {
        let bb = null;

        this.forAll(obj => {
            if (obj.hasComponent(MeshRenderer)) {
                const bounds = obj.getComponent(MeshRenderer).geometry.bounds.clone();
                if (bb === null)
                    bb = bounds;
                else
                    bb.merge(bounds);
            }
        });

        if (bb !== null) {
            bb.min = bb.min.add(this._object.transform.worldPosition);
            bb.max = bb.max.add(this._object.transform.worldPosition);
        } else {
            bb = new BoundingBox();
        }

        return bb;
    }


    // Setters

    /**
     * Set the global ID.
     * @param {string} val New global ID
     */
    set id(val) {
        if (this._id !== "")
            this.mgr.ids.delete(this._id);

        this._id = val;

        if (val !== "")
            this.mgr.ids.set(this._id, this);
    }

    /**
     * Set the local position.
     * @param {Vector3} pos New local position
     */
    setPos(pos) {
        this._object.localPosition = pos;

        if (this.isSelected())
            this.mgr.updateSelectBox();
    }

    /**
     * Set the x component of the local position.
     * @param {number} x New position along x-axis
     */
    setX(x) {
        if (isNaN(x))
            return;

        this._object.x = x;

        if (this.isSelected())
            this.mgr.updateSelectBox();
    }

    /**
     * Set the y component of the local position.
     * @param {number} y New position along y-axis
     */
    setY(y) {
        if (isNaN(y))
            return;

        this._object.y = y;

        if (this.isSelected())
            this.mgr.updateSelectBox();
    }

    /**
     * Set the z component of the local position.
     * @param {number} z New position along z-axis
     */
    setZ(z) {
        if (isNaN(z))
            return;

        this._object.z = z;

        if (this.isSelected())
            this.mgr.updateSelectBox();
    }

    /**
     * Set the model for the object.
     * @param {string} id ID of imported mesh
     */
    setModel(id) {
        if (id === "" || !this.mgr.models.has(id))
            return;

        const copy = this.mgr.models.get(id).clone();
        this._object.transform.cloneTo(copy);
        this._object.destroy();
        this._object = copy;
        this.mgr.scene.addChild(this._object);

        this.forAll(obj => {
            obj.addEventListener(PointerEvent3D.PICK_MOVE, this._mouseOver, this);
            obj.addEventListener(PointerEvent3D.PICK_OUT, this._mouseOff, this);
            obj.addEventListener(PointerEvent3D.PICK_CLICK, this._click, this);
        });

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.modelID = id;
    }


    // Iteration

    /**
     * Iterate through all children of the root object and run a function for each.
     * @param {function} func Function to run
     */
    forAllChildren(func = () => {}) {
        this._object.forChild(child => func(child));
    }

    /**
     * Iterate through all descendants and the root object and run a function for each.
     * @param {function} func Function to run
     */
    forAll(func = () => {}) {
        this._forAllRecursive(this._object, func);
    }

    /**
     * Recursively iterate through all children and their children and run a function for each.
     * @param {Object3D} obj Orillusion Object3D object
     * @param {function} func Function to run
     * @private
     */
    _forAllRecursive(obj, func = () => {}) {
        func(obj);

        obj.forChild(child => this._forAllRecursive(child, func));
    }


    // Selection

    /**
     * Select this actor.
     */
    select() {
        console.log('onClick');
        this.mgr.select(this);
    }


    // Duplication

    /**
     * Create and get a copy of the object.
     * @returns {SceneObject} Duplicate object
     */
    copy() {
        const newObj = new SceneObject({
            manager: this.mgr
        });

        newObj.setModel(this.modelID);
        newObj.localPosition = this._object.localPosition;

        return newObj;
    }

    /**
     * Create and get a copy of the object, and add it to the scene.
     * @returns {SceneObject} Duplicate object
     */
    duplicate() {
        const copy = this.copy();

        this.mgr.addObject(copy);

        return copy;
    }


    // Interaction

    /**
     * Handle when the mouse hovers over the object.
     * @param e Event
     * @private
     */
    _mouseOver(e) {
        document.body.style.cursor = "pointer";
    }

    /**
     * Handle when the mouse is no longer hovering over the object.
     * @param e Event
     * @private
     */
    _mouseOff(e) {
        document.body.style.cursor = "default";
    }

    /**
     * Handle when the mouse clicks on the object.
     * @param e Event
     * @private
     */
    _click(e) {
        this.select();
    }
}

export default SceneObject;
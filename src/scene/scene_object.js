import {
    BoxColliderShape,
    BoxGeometry,
    ColliderComponent, Color, Engine3D,
    LitMaterial,
    MeshRenderer,
    Object3D, PointerEvent3D, SphereGeometry,
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
     */
    constructor({
        manager,
        pos = new Vector3(),
        id = "",
        name = ""
    } = {}) {
        this._manager = manager;

        this._id = id;
        if (this._id !== "")
            this.mgr.ids.set(this._id, this);

        this.name = name;

        this._object = new Object3D();
        let mesh = this._object.addComponent(MeshRenderer);
        mesh.geometry = new BoxGeometry();
        mesh.material = new LitMaterial();
        mesh.material.baseColor = new Color(0.2, 0.5, 1);
        mesh.material.roughness = 1;
        mesh.material.metallic = 0;

        this._object.transform.localPosition = pos;

        const col = this._object.addComponent(ColliderComponent);
        col.shape = new BoxColliderShape()
            .setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(1, 1, 1));

        this._object.addEventListener(PointerEvent3D.PICK_OVER, this._mouseOver, this);
        this._object.addEventListener(PointerEvent3D.PICK_OUT, this._mouseOff, this);
        this._object.addEventListener(PointerEvent3D.PICK_CLICK, this._click, this);

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

        console.log(this.mgr)
    }

    /**
     * Set the local position.
     * @param {Vector3} pos New local position
     */
    setPos(pos) {
        this._object.localPosition = pos;
    }

    /**
     * Set the x component of the local position.
     * @param {number} x New position along x-axis
     */
    setX(x) {
        if (isNaN(x))
            return;

        this._object.x = x;
    }

    /**
     * Set the y component of the local position.
     * @param {number} y New position along y-axis
     */
    setY(y) {
        if (isNaN(y))
            return;

        this._object.y = y;
    }

    /**
     * Set the z component of the local position.
     * @param {number} z New position along z-axis
     */
    setZ(z) {
        if (isNaN(z))
            return;

        this._object.z = z;
    }


    // Selection

    /**
     * Select this actor.
     */
    select() {
        this.mgr.select(this);
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
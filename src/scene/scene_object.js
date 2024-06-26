import {
    BoundingBox,
    BoxGeometry,
    ColliderComponent,
    Color,
    LitMaterial,
    MeshRenderer,
    Object3D,
    Vector3
} from "@orillusion/core";
import EventHandler from "../event/event_handler.js";
import { createStore } from 'vuex';
import KeyboardScript from "./keyboard_script.js";

/**
 * @module SceneObject
 * @fileoverview Contains SceneObject class and store for login functionality.
 */

//
// Login/Logout Functionality
// This is exported to be used in FloorDisplay.vue
//

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, userData) {
            state.user = userData;
        },
    },
    getters: {
        authenticated(state) {
            return !!state.user;
        },
    },
    actions: {},
    modules: {}
});

import SubscriberPosition from "./subscriber_position.js";
import SubscriberRotation from "./subscriber_rotation.js";
import SubscriberSingleValue from "./subscriber_single_value.js";
import Util from "../util/util.js";

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
     * @param {boolean} locked Whether user edits of the objects should be prevented
     */
    constructor({
        manager,
        pos = new Vector3(),
        id = "",
        model: modelID = "",
        locked = false
    } = {}) {
        this._manager = manager;

        this._id = id;
        if (this._id !== "")
            this.mgr.ids.set(this._id, this);

        this._locked = locked;

        this.modelID = modelID;

        let mesh;

        this._object = new Object3D();

        this._hoverPreview = "";

        if (modelID === "") {
            mesh = this._object.addComponent(MeshRenderer);
            mesh.geometry = new BoxGeometry(100, 100, 100);
            mesh.material = new LitMaterial();
            mesh.material.baseColor = new Color(0.2, 0.5, 1);
            mesh.material.roughness = 1;
            mesh.material.metallic = 0;

            this._object.addComponent(ColliderComponent);
        } else {
            this._object = this.mgr.models.get(modelID).clone();
            this._object.addComponent(ColliderComponent);
            this._object.forChild(child => {
                if (child.hasComponent(MeshRenderer))
                    child.addComponent(ColliderComponent);
            });
        }

        this._object.transform.localPosition = pos;

        this._events = new EventHandler();

        this._subscribers = [
            new SubscriberPosition(this),
            new SubscriberRotation(this),
        ];
    }

    //
    // Deletion
    //

    /**
     * Delete the object and remove it from the scene manager.
     */
    delete() {
        this.mgr.removeObject(this);

        this._object.destroy();
    }



    //
    // Getters
    //

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
     * Get the position vector.
     * @returns {Vector3} Position/translation vector
     */
    get pos() {
        return this._object.localPosition.clone();
    }

    /**
     * Get the rotation of the object.
     * @returns {Vector3} Rotation vector
     */
    get rot() {
        return this._object.transform.localRotation.clone();
    }

    /**
     * Get the x component of the rotation vector.
     * @returns {number} Rotation around the x-axis
     */
    get rotX() {
        return this._object.transform.localRotation.x;
    }

    /**
     * Get the y component of the rotation vector.
     * @returns {number} Rotation around the y-axis
     */
    get rotY() {
        return this._object.transform.localRotation.y;
    }

    /**
     * Get the z component of the rotation vector.
     * @returns {number} Rotation around the z-axis
     */
    get rotZ() {
        return this._object.transform.localRotation.z;
    }

    /**
     * Get the scale of the object.
     * @returns {Vector3} Scale vector
     */
    get scale() {
        return this._object.transform.localScale.clone();
    }

    /**
     * Get the event handler.
     * @returns {EventHandler} Event handler
     */
    get events() {
        return this._events;
    }

    /**
     * Check if the object is blocking user edits.
     * @returns {boolean} Whether object is blocking user edits
     */
    get locked() {
        return this._locked;
    }

    /**
     * Toggle the locked status of the object.
     */
    toggleLock() {
        this.locked = !this._locked;

        this.events.do("lock", this._locked);
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
     * @param {boolean} transform Whether to apply object transform
     * @returns {BoundingBox} Object bounding box
     */
    getBoundingBox(transform = true) {
        let bb = null;

        this.forAll((obj) => {
            if (obj.hasComponent(MeshRenderer)) {
                const bounds = obj.getComponent(MeshRenderer).geometry.bounds.clone();

                if (bb === null)
                    bb = bounds;
                else
                    bb.merge(bounds);
            }
        });

        if (bb !== null && transform) {
            const matrix = this._object.transform.worldMatrix.clone();
            matrix.position = new Vector3();
            bb = Util.transformBoundingBox(bb, matrix);
            bb.setFromMinMax(
                bb.min.add(this._object.localPosition),
                bb.max.add(this._object.localPosition)
            );
        } else {
            bb = new BoundingBox();
        }

        return bb;
    }

    /**
     * Get a list of all subscribers attached to the object.
     * @returns {Subscriber[]} List of all subscribers
     */
    getSubscribers() {
        return [...this._subscribers];
    }



    //
    // Setters
    //

    /**
    * Set the global ID.
    * @param {string} val New global ID
    */
    set id(val) {
        if (this._id !== "") this.mgr.ids.delete(this._id);

        this._id = val;

        if (val !== "") this.mgr.ids.set(this._id, this);
    }

    /**
    * Set the locked status of the object.
    * @param val Whether object should block user edits
    */
    set locked(val) {
        this._locked = val;

        this.events.do("lock", val);

        if (this._locked && this.isSelected())
            this.mgr.deselect(this);
    }

    /**
     * Set the local position.
     * @param {Vector3} newPos New local position
     */
    set pos(newPos) {
        this._object.localPosition = newPos;
        this._pos = newPos;

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("pos", this.pos.clone());
    }

    /**
     * Set the x component of the local position.
     * @param {number} x New position along x-axis
     */
    set X(x) {
        if (isNaN(x))
            return;

        this._object.transform.x = x;

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("pos", this.pos.clone());
    }

    /**
     * Set the y component of the local position.
     * @param {number} y New position along y-axis
     */
    set Y(y) {
        if (isNaN(y))
            return;

        this._object.transform.y = y;

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("pos", this.pos.clone());
    }

    /**
     * Set the z component of the local position.
     * @param {number} z New position along z-axis
     */
    set Z(z) {
        if (isNaN(z))
            return;

        this._object.transform.z = z;

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("pos", this.pos.clone());
    }

    /**
     * Set the rotation of the object.
     * @param {Vector3} newRot New rotation vector
     */
    set rot(newRot) {
        this._object.transform.localRotation = newRot.clone();

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("rot", newRot.clone());
    }

    /**
     * Set the x component of the rotation vector.
     * @param {number} x New rotation around the x-axis
     */
    set rotX(x) {
        const rot = this.rot;
        rot.x = x;
        this.rot = rot;
    }

    /**
     * Set the y component of the rotation vector.
     * @param {number} y New rotation around the y-axis
     */
    set rotY(y) {
        const rot = this.rot;
        rot.y = y;
        this.rot = rot;
    }

    /**
     * Set the z component of the rotation vector.
     * @param {number} z New rotation around the z-axis
     */
    set rotZ(z) {
        const rot = this.rot;
        rot.z = z;
        this.rot = rot;
    }

    /**
     * Set the scale vector.
     * @param {Vector3} newScale New scale vector
     */
    set scale(newScale) {
        this._object.transform.localScale = newScale.clone();

        if (this.isSelected())
            this.mgr.updateSelectBox();

        this.events.do("scale", newScale);
    }

    /**
     * Set the model for the object.
     * @param {string} id ID of imported mesh
     */
    setModel(id) {
        if (id === "" || !this.mgr.models.has(id)) return;

        const copy = this.mgr.models.get(id).clone();
        this._object.transform.cloneTo(copy);
        this.mgr.revObjects.delete(this._object);
        const old = this._object;
        this._object = copy;

        this._object.transform.updateWorldMatrix(true);
        this.mgr.scene.addChild(this._object);

        this.mgr.revObjects.set(this._object, this);

        if (this.isSelected()) this.mgr.updateSelectBox();

        this.modelID = id;

        const ks = this._object.addComponent(KeyboardScript);
        ks.mgr = this.mgr;
        ks.object = this;

        this._object.forChild(child => {
            child.addComponent(ColliderComponent);
        });

        this.mgr.scene.removeChild(old);
    }

    /**
     * Set the color for every part of the object.
     * @param {Color} color New solid color
     */
    setSolidColor(color) {
        this.forAll((obj) => {
          if (obj.hasComponent(MeshRenderer))
            obj.getComponent(MeshRenderer).material.baseColor = color;
        });
    }



    //
    // Iteration
    //

    /**
     * Iterate through all children of the root object and run a function for each.
     * @param {function} func Function to run
     */
    forAllChildren(func = () => {}) {
        this._object.forChild((child) => func(child));
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

        obj.forChild((child) => this._forAllRecursive(child, func));
    }



    //
    // Selection
    //

    /**
     * Select this actor.
     */
    select() {
        if (this.locked)
            return;

        this.mgr.select(this);
    }



    //
    // Duplication
    //

    /**
    * Create and get a copy of the object.
    * @returns {SceneObject} Duplicate object
    */
    copy() {
        const newObj = new SceneObject({
          manager: this.mgr,
        });

        newObj.setModel(this.modelID);
        this._object.transform.cloneTo(newObj.getObject3D());

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



    //
    //  Interaction
    //

    /**
    * Handle when the mouse hovers over the object.
    */
    mouseOver() {
        if (this.isSelected() || this.locked)
            return;

        document.body.style.cursor = "pointer";

        if (this._hoverPreview !== "")
            this.mgr.view.graphic3D.Clear(this._hoverPreview);
        this._hoverPreview = "";

        const bb = this.getBoundingBox();

        this._hoverPreview = String(Math.floor(Math.random() * 4096));
        this.mgr.view.graphic3D.drawBoundingBox(
            this._hoverPreview,
            bb,
            new Color(0.7, 0.7, 0.7)
        );
    }

    /**
     * Handle when the mouse is no longer hovering over the object.
     */
    mouseOff() {
        document.body.style.cursor = "default";

        if (this._hoverPreview !== "")
          this.mgr.view.graphic3D.Clear(this._hoverPreview);
        this._hoverPreview = "";
    }

    /**
     * Handle when the mouse clicks on the object.
     */
    click() {
        this.select();

        if (this._hoverPreview !== "")
            this.mgr.view.graphic3D.Clear(this._hoverPreview);
            this._hoverPreview = "";
    }

    /**
     * Snap the model to a specific y-axis. Will use bounding box to find bottom of object.
     * @param {number} y Point along y-axis to snap to (0 by default)
     */
    snapDown(y = 0) {
        const bounds = this.getBoundingBox();

        const center = bounds.center;
        const pos = this.pos;
        const diff = center.y - pos.y;

        const height = bounds.max.y - bounds.min.y;

        this._object.y = y + height / 2 - diff;
        this.events.do("pos", this.pos);

        if (this.isSelected())
            this.mgr.updateSelectBox();
    }



    // -----------
    //  Live Data
    // -----------

    /**
     * Handle live data from MQTT.
     * @param {Object} data Live data from MQTT
     */
    handleLiveData(data) {
        for (const subscriber of this._subscribers)
            subscriber.handleData(data);
    }

    /**
     * Add a subscriber to handle live data.
     * @param {Subscriber} sub Subscriber to add
     */
    addSubscriber(sub) {
        this._subscribers.push(sub);
    }

    /**
     * Remove a subscriber.
     * @param {Subscriber} subscriber Subscriber to remove
     */
    removeSubscriber(subscriber) {
        this._subscribers.splice(this._subscribers.indexOf(subscriber), 1);
    }

    /**
     * Remove all subscribers.
     */
    clearSubscribers() {
        this._subscribers = [];
    }



    //
    //  Serialization / Save File
    //

    /**
     * Serialize the object for saving
     * @return {Object} Plain Object
     */
    serializeObject() {
        let singleValSubs = {}
        this._subscribers.forEach(sub => {
            if (sub instanceof SubscriberSingleValue)
            {
                let type = sub.id || 'default'
                singleValSubs[type] = sub.serialize()
            }
        });

        return {
            objInfo: {
                id: this._id,
                model: this.modelID,
                locked: this._locked,
                pos: {
                    x: this._object.x,
                    y: this._object.y,
                    z: this._object.z
                },
                rot: {
                    x: this._object.transform.localRotation.x,
                    y: this._object.transform.localRotation.y,
                    z: this._object.transform.localRotation.z
                },
                scale: {
                    x: this._object.transform.localScale.x,
                    y: this._object.transform.localScale.y,
                    z: this._object.transform.localScale.z
                }
            },
            subscribers: {
                singleValue: singleValSubs,
                transformers: !!this._subscribers.find(
                    subscriber =>
                        subscriber instanceof SubscriberPosition ||
                        subscriber instanceof SubscriberRotation),
            }
        }
    }
}

export default {SceneObject, store};
import Subscriber from "./subscriber.js";
import {Vector3} from "@orillusion/core";

/**
 * @module SubscriberRotation
 * @fileoverview Contains SubscriberRotation class.
 */

/**
 * @class
 * @extends Subscriber
 * Subscriber to handle updating the position of objects
 * based on live data.
 */
class SubscriberRotation extends Subscriber {
    /**
     * Create a new rotation subscriber.
     * @param {SceneObject} object Object to manipulate
     */
    constructor(object) {
        super(object, "rotation");
    }

    /**
     * Handle received data.
     * @param {Object} data JSON data from MQTT
     */
    handleData(data) {
        super.handleData(data);

        if (this.object === null)
            return;

        if (!("rot_x" in data) ||
            !("rot_y" in data) ||
            !("rot_x" in data))
            return;

        this.object.rot = new Vector3(
            parseFloat(data["rot_x"]),
            parseFloat(data["rot_y"]),
            parseFloat(data["rot_z"])
        );
    }

    /**
     * Get the display name of the subscriber.
     * @returns {string} Display-only name of subscriber.
     */
    getDisplayName() {
        return "Rotation";
    }
}

export default SubscriberRotation;
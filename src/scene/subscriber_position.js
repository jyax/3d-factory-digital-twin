import Subscriber from "./subscriber.js";
import {Vector3} from "@orillusion/core";

/**
 * @module SubscriberPosition
 * @fileoverview Contains SubscriberPosition class.
 */

/**
 * @class
 * @extends Subscriber
 * Subscriber to handle updating the position of objects
 * based on live data.
 */
class SubscriberPosition extends Subscriber {
    /**
     * Create a new position subscriber.
     * @param {SceneObject} object Object to manipulate
     */
    constructor(object) {
        super(object, "position");
    }

    /**
     * Handle received data.
     * @param {Object} data JSON data from MQTT
     */
    handleData(data) {
        super.handleData(data);

        if (this.object === null)
            return;

        if (!("x" in data) ||
            !("y" in data) ||
            !("z" in data))
            return;

        this.object.pos = new Vector3(
            parseFloat(data["x"]),
            parseFloat(data["y"]),
            parseFloat(data["z"])
        );
    }

    /**
     * Get the display name of the subscriber.
     * @returns {string} Display-only name of subscriber.
     */
    getDisplayName() {
        return "Position";
    }
}

export default SubscriberPosition;
import Subscriber from "./subscriber.js";
import ColorGradient from "../color/color_gradient.js";

/**
 * @module SubscriberSingleValue
 * @fileoverview Contains SubscriberSingleValue class.
 */

/**
 * @class
 * @extends Subscriber
 * Subscriber to handle ambiguous single values
 * based on live data.
 */
class SubscriberSingleValue extends Subscriber {
    /**
     * Types recommended to the user in the UI.
     * @type {string[]}
     */
    static SUGGESTED_TYPES = ["temp", "voltage", "inventory"];

    /**
     * Create a new single value subscriber.
     * @param {SceneObject} object Object to manipulate
     * @param {string} id Type/ID of subscriber
     * @param {number} min Minimum non-critical value
     * @param {number} max Maximum non-critical value
     * @param {ColorGradient} gradient Color gradient for value visualization
     */
    constructor(object, id = "", min = 0, max = 0,
                gradient = new ColorGradient()) {
        super(object, id);

        this.gradient = new ColorGradient();
        this.min = 0;
        this.max = 0;

        this._history = [];
    }

    /**
     * Get an array of the history of values.
     * @returns {number[]} History of received values
     */
    get history() {
        return [...this._history];
    }

    /**
     * Handle received data.
     * @param {Object} data JSON data from MQTT
     */
    handleData(data) {
        super.handleData(data);

        if (this.id === "")
            return;

        if (this.object === null)
            return;

        if (!(this.id in data))
            return;

        let val = parseFloat(data[this.id]);
        this._history.push(val);

        const d = (val - this.min) / (this.max - this.min);

        const color = this.gradient.get(d);

        this.object.setSolidColor(color);

        if (val >= this.max)
            this.object.mgr.alert("Temperature exceeded maximum threshold.", this.object.id);
    }

    /**
     * Get the display name of the subscriber.
     * @returns {string} Display-only name of subscriber.
     */
    getDisplayName() {
        return "Single value";
    }

    /**
     * Serialize relevant variables to a JSON object.
     * @returns {{min: number, max: number, gradient: ColorGradient}} Serialized JSON data
     */
    serialize() {
        return {
            min: this.min,
            max: this.max,
            gradient: this.gradient
        };
    }
}

export default SubscriberSingleValue;
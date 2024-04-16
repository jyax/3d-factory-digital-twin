import EventHandler from "../event/event_handler.js";

/**
 * @module Subscriber
 * @fileoverview Contains Subscriber class.
 */

/**
 * @class
 * @abstract
 * Base class for handing live object data.
 */
class Subscriber {
    /**
     * Create a new Subscriber.
     * @param {SceneObject} object Object to manipulate
     * @param {string} type Type/ID of subscriber
     */
    constructor(object, type = "") {
        this.object = object;

        this.type = type;

        this._lastReceived = null;

        this._events = new EventHandler();
    }

    /**
     * Get the event handler of the subscriber.
     * @returns {EventHandler} Event handler of subscriber
     */
    get events() {
        return this._events;
    }

    /**
     * Handle received data.
     * @param {Object} data JSON data from MQTT
     */
    handleData(data) {
        this._lastReceived = new Date();

        this.events.do("update");
    }

    /**
     * Get the display name of the subscriber.
     * @returns {string} Display-only name of subscriber.
     */
    getDisplayName() {
        return "Subscriber";
    }

    /**
     * Get a string describing the last timestamp when live data was received.
     * @returns {string} String representing last received data
     */
    getLastReceivedString() {
        if (this._lastReceived === null)
            return "This subscriber has not yet received any updates.";

        let hours = this._lastReceived.getHours();
        let min = "" + this._lastReceived.getMinutes();
        if (min.length === 1)
            min = "0" + min;

        let suffix = "AM";
        if (hours > 12) {
            hours -= 12;
            suffix = "PM";
        }

        const str = hours + ":" + min + " " + suffix;

        return "Last update received at " + str;
    }
}

export default Subscriber;
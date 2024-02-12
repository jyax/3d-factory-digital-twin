import EventListener from "./event_listener.js";

/**
 * @module EventHandler
 * @fileoverview Contains EventHandler class.
 */

/**
 * @class
 * Handles and manages event listeners.
 */
class EventHandler {
    /**
     * Create a new event handler.
     */
    constructor() {
        this._events = new Map();
    }

    /**
     * Create a new listener for specified event.
     * @param {string} name Event name/ID to run on
     * @param {function} func Function to run
     * @returns {EventListener} Created event listener (can be used to remove from handler)
     */
    on(name, func) {
        if (!this._events.has(name))
            this._events.set(name, []);

        const listener = new EventListener(name, func);
        this._events.get(name).push(listener);

        return listener;
    }

    /**
     * Trigger a specific event.
     * @param {string} name Name/ID of event to trigger
     * @param args Arguments to pass to each listener
     */
    do(name, ...args) {
        if (this._events.has(name))
            for (const listener of this._events.get(name))
                listener.do(...args);
    }

    /**
     * Remove a listener from the handler.
     * @param {EventListener} listener Listener to remove
     */
    remove(listener) {
        const name = listener.event;
        if (!this._events.has(name))
            return;

        const index = this._events.get(name).indexOf(listener);
        this._events.get(name).splice(index, 1);
    }
}

export default EventHandler;
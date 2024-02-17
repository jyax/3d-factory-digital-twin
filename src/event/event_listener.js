/**
 * @module EventListener
 * @fileoverview Contains EventListener class.
 */

/**
 * @class
 * Stores and runs a specific event listener function.
 */
class EventListener {
    /**
     * Create a new event listener.
     * @param {string} event Event name/ID listener is listening on
     * @param {function} func Function to run when triggered
     */
    constructor(event, func) {
        this._event = event;
        this._func = func;
    }

    /**
     * Get the event name/ID the listener is listening on.
     * @returns {string} Event name/ID
     */
    get event() {
        return this._event;
    }

    /**
     * Run the function with arguments.
     * @param args Arguments to pass into function
     */
    do(...args) {
        this._func(...args);
    }
}

export default EventListener;
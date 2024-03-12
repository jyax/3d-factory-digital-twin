/**
 * The EventListener class is used to add or remove event listeners.
 * @internal
 * @group Events
 */
export declare class CEventListener {
    type: string | number;
    thisObject: any;
    handler: Function;
    param: any;
    priority: number;
    /**
     * @private
     */
    static event_id_count: number;
    /**
     *
     * Record a id. When registering a listening event, the value will increase automatically
     */
    id: number;
    /**
     *
     * Returns current event dispatcher
     */
    current: any;
    /**
     *
     * @param type {string} event type
     * @param thisObject {any} the object is registerd
     * @param handler {Function} The callback function that handles events.
     * @param param {any} Parameters bound when registering events
     * @param priority {number} The priority of callback function execution, with a larger set value having priority to call
     */
    constructor(type?: string | number, thisObject?: any, handler?: Function, param?: any, priority?: number);
    /**
     *
     * Compare whether two events are the same
     * @param type {string} event type
     * @param handler {Function} The callback function that handles events.
     * @param thisObject {any} the object is registerd
     * @param param {any} Parameters bound when registering events
     * @returns {boolean} Returns a boolean
     */
    equalCurrentListener(type: string | number, handler: Function, thisObject: any, param: any): boolean;
    /**
     *
     * release all registered event.
     */
    dispose(): void;
}

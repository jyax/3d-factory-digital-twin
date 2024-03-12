import { CEvent } from './CEvent';
/**
 * Basic class of event diapatcher.
 * It includes the implementation of functions such as event registration,
 * deregistration, distribution, and unregister.
 * @group Events
 */
export declare class CEventDispatcher {
    /**
     * @internal
     */
    protected listeners: any;
    /**
     * @internal
     */
    data: any;
    /**
     *
     * Dispatch an event to all registered objects with a specific type of listener.
     * @param event3D the event is dispatched.
     */
    dispatchEvent(event: CEvent): void;
    /**
     *
     * release all registered event.
     */
    destroy(): void;
    /**
     *
     * register an event listener to event distancher.
     * @param type {string} event type.
     * @param callback {Function} The callback function that handles events.
     * This function must accept an Event3D object as its unique parameter and cannot return any result.
     * for example: function(evt:Event3D):void.
     * @param thisObject {any} Current registration object, it'll call callback function.
     * @param param {any} the data binded to registered event, the default value is null.
     * @param priority {number} The priority of callback function execution, with a larger set value having priority to call
     * @returns {number} Returns register event id
     */
    addEventListener(type: string | number, callback: Function, thisObject: any, param?: any, priority?: number): number;
    /**
     *
     * Remove Event Listening
     * @param type {string} event type
     * @param callback {Function} callback function of event register
     * @param thisObject {any} The current registered object.
     */
    removeEventListener(type: string | number, callback: Function, thisObject: any): void;
    /**
     *
     * Remove an event Listening with id
     * @param register event id, see {@link addEventListener}
     * Returns true when removed success.
     */
    removeEventListenerAt(id: number): boolean;
    /**
     *
     * Specify a event type to remove all related event listeners
     * eventType event type, set null to remove all event listeners
     */
    removeAllEventListener(eventType?: string | number): void;
    /**
     *
     * whether the target presence of a listener with event type.
     * @param type {string} event type.
     * @returns {boolean} Returns a boolean.
     */
    containEventListener(type: string): boolean;
    /**
     *
     * whether the target presence of a listener with event type. it associate more registration parameters.
     * @param type {string} event name.
     * @param callback {Function} callback function of event register.
     * @param thisObject {any} The registered object.
     * @returns {boolean} Returns a boolean.
     */
    hasEventListener(type: string | number, callback?: Function, thisObject?: any): boolean;
}

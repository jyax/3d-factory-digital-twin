/**
 * the param of touch event.
 * Save as the basic data for touch events in touch event. see InputSystem.
 * @internal
 * @group IO
 */
export declare class TouchData {
    constructor(touch: Touch);
    /**
     * The horizontal offset relative to the position of the upper left corner of Canvas.
     */
    canvasX: number;
    /**
     * The vertical offset relative to the position of the upper left corner of Canvas.
     */
    canvasY: number;
    /**
     * touch id
     */
    identifier: number;
    /**
     * The horizontal offset relative to the top left corner of the browser content area
     * It will change with the movement of the scroll bar.
     */
    clientX: number;
    /**
     * The ertical offset relative to the top left corner of the browser content area
     * It will change with the movement of the scroll bar.
     */
    clientY: number;
    /**
     * The horizontal offset relative to the top left corner of the browser content area
     * It won't change with the movement of the scroll bar.
     */
    pageX: number;
    /**
     * The ertical offset relative to the top left corner of the browser content area
     * It won't change with the movement of the scroll bar.
     */
    pageY: number;
    /**
     * The horizontal offset relative to the position of the top left corner of the user screen.
     */
    screenX: number;
    /**
     * The vertical offset relative to the position of the top left corner of the user screen.
     */
    screenY: number;
}

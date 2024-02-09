import { Vector3 } from "../../math/Vector3";
import { ComponentBase } from "../ComponentBase";
/**
 * Free camera controller.
 * Move forward, backward, left, and right in the direction of W A S D.
 * Control the camera's movement direction by holding down the left mouse button
 * @group CameraController
 */
export declare class FlyCameraController extends ComponentBase {
    /**
     *  Camera movement speed
     */
    moveSpeed: number;
    /**
     *
     * Coordinates of specific objects
     */
    targetPos: Vector3;
    /**
     *
     * Camera orientation coordinates
     */
    lookAtPos: Vector3;
    /**
     * @internal
     */
    config: {
        shiftMoveScale: number;
    };
    private _moveScale;
    private _dir;
    private _mouseFactory;
    private _factory;
    private _mouseDown;
    private _lastPos;
    private _keyState;
    constructor();
    /**
     *
     * Initialize camera data
     * @param cameraPos source position
     * @param lookAt target position
     */
    setCamera(cameraPos: Vector3, lookAt: Vector3): void;
    /**
     * @internal
     */
    start(): void;
    private mouseWheel;
    private keyUp;
    private keyDown;
    private Reset;
    private mouseDown;
    private mouseUp;
    /**
     *
     * Get the smoothness of the camera by keyboard control
     */
    get factory(): number;
    /**
     *
     * Set the smoothness of the camera by keyboard control
     */
    set factory(value: number);
    /**
     *
     * Get the smoothness of the camera by mouse control
     */
    get mouseFactory(): number;
    /**
     *
     * Set the smoothness of the camera by mouse control
     */
    set mouseFactory(value: number);
    /**
     * @internal
     * @param target
     * @param current
     * @param t
     * @returns
     */
    private internal;
    onUpdate(): void;
    /**
     * @internal
     */
    destroy(force?: boolean): void;
}

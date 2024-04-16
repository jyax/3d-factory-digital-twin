import {ComponentBase, Engine3D, KeyCode, KeyEvent, OrbitController, Time, View3D} from "@orillusion/core";
import Util from "../util/util.js";

/**
 * @module CameraControl
 * @fileoverview Contains CameraControl class.
 */

/**
 * @class
 * @extends ComponentBase
 * Component for handling custom camera movement.
 */
class CameraControl extends ComponentBase {
    static SPEED = 2048;

    /**
     * Create a new camera controller.
     */
    constructor() {
        super();

        this.mgr = null;

        this._fwd = 0;
        this._sdw = 0;
        this._up = 0;
    }

    /**
     * Handle initialization of component once added to an object.
     */
    start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this._keyUp, this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this._keyDown, this);
    }

    /**
     * Handle the releasing of keys.
     * @param {KeyEvent} event Event from key release
     * @private
     */
    _keyUp(event) {
        if (Util.inputFocused())
            return;

        if (event.keyCode === KeyCode.Key_W)
            this._fwd -= 1;
        else if (event.keyCode === KeyCode.Key_S)
            this._fwd += 1;

        if (event.keyCode === KeyCode.Key_A)
            this._sdw -= 1;
        else if (event.keyCode === KeyCode.Key_D)
            this._sdw += 1;

        if (event.keyCode === KeyCode.Key_Space)
            this._up -= 1;
        else if (event.keyCode === KeyCode.Key_Z)
            this._up += 1;
    }

    /**
     * Handle the pressing down of keys.
     * @param {KeyEvent} event Event from key press
     * @private
     */
    _keyDown(event) {
        if (Util.inputFocused())
            return;

        if (event.keyCode === KeyCode.Key_W)
            this._fwd += 1;
        else if (event.keyCode === KeyCode.Key_S)
            this._fwd -= 1;

        if (event.keyCode === KeyCode.Key_A)
            this._sdw += 1;
        else if (event.keyCode === KeyCode.Key_D)
            this._sdw -= 1;

        if (event.keyCode === KeyCode.Key_Space)
            this._up += 1;
        else if (event.keyCode === KeyCode.Key_Z)
            this._up -= 1;
    }

    /**
     * Handle movement of the camera each update frame.
     * @param {View3D} view View the object is being rendered in
     */
    onUpdate(view) {
        if (this.mgr.isKeyDown("control"))
            return;

        const elapsed = Time.delta / 1000;

        const forward = this.object3D.transform.forward.mul(this._fwd * CameraControl.SPEED * elapsed);
        const sideways = this.object3D.transform.right.mul(this._sdw * CameraControl.SPEED * elapsed);
        const up = this.object3D.transform.up.mul(this._up * CameraControl.SPEED * elapsed);

        this.object3D.localPosition = this.object3D.localPosition.add(forward).add(sideways).add(up);
        const oc = this.object3D.getComponent(OrbitController);
        oc.target = oc.target.add(forward).add(sideways).add(up);
    }
}

export default CameraControl;
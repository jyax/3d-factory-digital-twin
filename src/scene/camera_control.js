import {ComponentBase, Engine3D, KeyCode, KeyEvent, OrbitController, Time} from "@orillusion/core";
import Util from "../util/util.js";

class CameraControl extends ComponentBase {
    static SPEED = 2048;

    constructor() {
        super();

        this.mgr = null;

        this._fwd = 0;
        this._sdw = 0;
        this._up = 0;
    }

    start() {
        //Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this._keyUp, this);
        //Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this._keyDown, this);
    }

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

    onUpdate(view) {
        if (this.mgr.isKeyDown("control"))
            return;

        this._fwd = 0;
        this._sdw = 0;
        this._up = 0;

        if (this.mgr.isKeyDown("w"))
            this._fwd += 1;
        if (this.mgr.isKeyDown("s"))
            this._fwd -= 1;

        if (this.mgr.isKeyDown("a"))
            this._sdw += 1;
        if (this.mgr.isKeyDown("d"))
            this._sdw -= 1;

        if (this.mgr.isKeyDown(" "))
            this._up += 1;
        if (this.mgr.isKeyDown("z"))
            this._up -= 1;

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
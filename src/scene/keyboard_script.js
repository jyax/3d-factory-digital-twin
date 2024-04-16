import {
    ComponentBase,
    Engine3D,
    KeyEvent,
    KeyCode,
    Time,
    View3D
} from "@orillusion/core";

import Util from "../util/util";

/**
 * @class
 * @extends ComponentBase
 * Script to rotate object with arrow keys.
 */
class KeyboardScript extends ComponentBase {

    right = false;
    left = false;
    mgr = null;
    object = null;

    start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    }

    /**
     * Handling the pressing down of a key.
     * @param {KeyEvent} e Event from key press
     */
    keyDown(e) {
        if (e.keyCode === KeyCode.Key_Right) {
            this.right = true;
        }
        else if (e.keyCode === KeyCode.Key_Left) {
            this.left = true;
        }
    }

    /**
     * Handling the releasing of a key.
     * @param {KeyEvent} e Event from key release
     */
    keyUp(e) {
        if (e.keyCode === KeyCode.Key_Right) {
            this.right = false;
        }
        else if (e.keyCode === KeyCode.Key_Left) {
            this.left = false;
        }
    }

    /**
     * Handle the rotation each update frame.
     * @param {View3D} view View the object is being rendered in
     */
    onUpdate(view) {
        if (!this.enable) return;
        if (Util.inputFocused())
                return;

        if (!this.object.isSelected())
            return;

        const elapsed = Time.delta / 1000;

        let speed = 150;
        if (this.mgr.isKeyDown("shift"))
            speed = 75;

        let trans = this.object3D.transform;
        if (this.left) trans.rotationY -= speed * elapsed;
        if (this.right) trans.rotationY += speed * elapsed;
        trans.rotationY %= 360;

        if (this.mgr !== null)
            this.mgr.updateSelectBox();

        this.object.events.do("rot", this.object3D.transform.localRotation.clone());
    }
}

export default KeyboardScript;
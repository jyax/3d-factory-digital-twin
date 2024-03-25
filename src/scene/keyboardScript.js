import {
    ComponentBase,
    BoundingBox,
    Camera3D,
    Color,
    Engine3D,
    LitMaterial,
    MeshRenderer,
    Object3D,
    OrbitController,
    PointerEvent3D,
    Scene3D,
    SkyRenderer,
    SolidColorSky,
    Vector3,
    View3D,
    FlyCameraController,
    AtmosphericComponent,
    KeyEvent,
    KeyCode
} from "@orillusion/core";

import Util from "../util/util";

class keyboardScript extends ComponentBase
{
    right = false;
    left = false;
    mgr = null;

    start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    }
    keyDown(e) {
        if (e.keyCode === KeyCode.Key_Right){
            this.right = true;
        }
        else if(e.keyCode === KeyCode.Key_Left){
            this.left = true;
        }
    }
    keyUp(e) {
        let trans = this.object3D.transform;

        if(e.keyCode === KeyCode.Key_Right){
            this.right = false;
        }
        else if(e.keyCode === KeyCode.Key_Left){
            this.left = false;
        }
        else {
            trans.rotationY = 0;
        }
    }

    onUpdate() {
        if(!this.enable) return;
        if (Util.inputFocused())
                return;

        let trans = this.object3D.transform;
        if(this.left) trans.rotationY -= 5;
        if(this.right) trans.rotationY += 5;

        if (this.mgr !== null)
            this.mgr.updateSelectBox();
    }
}

export default keyboardScript;
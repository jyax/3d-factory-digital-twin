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
class keyboardScript extends ComponentBase
{
    right = false;
    left = false;

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
        console.log(this.transform.rotationY);

        if(e.keyCode === KeyCode.Key_Right){
            this.right = false;
        }
        else if(e.keyCode === KeyCode.Key_Left){
            this.left = false;
        }
        else {
            trans.rotationY = 0;
            console.log(trans.rotationY);
        }
    }

    onUpdate() {
        if(!this.enable) return;

        let trans = this.object3D.transform;
        if(this.left) trans.rotationY -= 5;
        if(this.right) trans.rotationY += 5;
    }
}

export default keyboardScript;
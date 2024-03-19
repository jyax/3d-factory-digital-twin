import {ComponentBase, Engine3D, KeyEvent} from "@orillusion/core";

class KeyboardScript extends ComponentBase
{
    #right = false;
    #left = false;

    start() {
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyup, this);
        Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    }
    keyDown(e) {
        if (e.keyCode == KeyCode.Key_Right){
            this.right = true;
        }
        else if(e.keyCode = KeyCode.Key_Left){
            this.left = true;
        }
    }
    keyUp(e) {
        let trans = this.object3D.transform;
        console.log(this.transform.rotationY);

        if(e.keyCode == KeyCode.Key_Right){
            this.right = false;
        }
        else if(e.keyCode = KeyCode.Key_Left){
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

export default KeyboardScript;
import Subscriber from "./subscriber.js";
import {Vector3} from "@orillusion/core";

class SubscriberRotation extends Subscriber {
    constructor(object) {
        super(object, "rotation");
    }

    handleData(data) {
        super.handleData(data);

        if (this.object === null)
            return;

        if (!("rot_x" in data) ||
            !("rot_y" in data) ||
            !("rot_x" in data))
            return;

        this.object.setRot(new Vector3(
            parseFloat(data["rot_x"]),
            parseFloat(data["rot_y"]),
            parseFloat(data["rot_z"])
        ));
    }

    getDisplayName() {
        return "Rotation";
    }
}

export default SubscriberRotation;
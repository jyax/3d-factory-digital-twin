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

        if (!("rotationX" in data) ||
            !("rotationY" in data) ||
            !("rotationZ" in data))
            return;

        this.object.pos = new Vector3(
            parseFloat(data["rotationX"]),
            parseFloat(data["rotationY"]),
            parseFloat(data["rotationZ"])
        );
    }

    getDisplayName() {
        return "Rotation";
    }
}

export default SubscriberRotation;
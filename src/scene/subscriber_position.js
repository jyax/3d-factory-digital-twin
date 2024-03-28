import Subscriber from "./subscriber.js";
import {Vector3} from "@orillusion/core";

class SubscriberPosition extends Subscriber {
    constructor(object) {
        super(object, "position");
    }

    handleData(data) {
        super.handleData(data);

        if (this.object === null)
            return;

        if (!("x" in data) ||
            !("y" in data) ||
            !("z" in data))
            return;

        this.object.pos = new Vector3(
            parseFloat(data["x"]),
            parseFloat(data["y"]),
            parseFloat(data["z"])
        );
    }

    getDisplayName() {
        return "Position";
    }
}

export default SubscriberPosition;
import Subscriber from "./subscriber.js";
import {Vector3} from "@orillusion/core";

class SubscriberPosition extends Subscriber {
    constructor(object) {
        super(object);
    }

    handleData(data) {
        super.handleData(data);

        if (this.object === null)
            return;

        this.object.setPos(new Vector3(
            parseFloat(data["x"]),
            parseFloat(data["y"]),
            parseFloat(data["z"])
        ));
    }

    getDisplayName() {
        return "Position";
    }
}

export default SubscriberPosition;
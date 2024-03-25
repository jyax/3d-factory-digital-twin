import Subscriber from "./subscriber.js";
import ColorGradient from "../color/color_gradient.js";

class SubscriberSingleValue extends Subscriber {
    constructor(object, id = "") {
        super(object);

        this.gradient = new ColorGradient();

        this.min = 0;
        this.max = 0;

        this.id = id;
    }

    handleData(data) {
        super.handleData(data);

        if (this.id === "")
            return;

        if (this.object === null)
            return;

        if (!(this.id in data))
            return;

        let val = parseFloat(data[this.id]);

        const d = (val - this.min) / (this.max - this.min);

        const color = this.gradient.get(d);

        this.object.setSolidColor(color);

        if (val >= this.max)
            this.object.mgr.alert("Temperature exceeded maximum threshold.", this.object.id);
    }

    getDisplayName() {
        return "Single value";
    }

    serialize() {
        return {
            id: this.id,
            min: this.min,
            max: this.max,
            gradient: this.gradient
        }
    }
}

export default SubscriberSingleValue;
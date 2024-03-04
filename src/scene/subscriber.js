import EventHandler from "../event/event_handler.js";

class Subscriber {
    constructor(object) {
        this.object = object;

        this._lastReceived = null;

        this._events = new EventHandler();
    }

    get events() {
        return this._events;
    }

    handleData(data) {
        this._lastReceived = new Date();

        this.events.do("update");
    }

    getDisplayName() {
        return "Subscriber";
    }

    getLastReceivedString() {
        if (this._lastReceived === null)
            return "This subscriber has not yet received any updates.";

        let hours = this._lastReceived.getHours();
        let min = "" + this._lastReceived.getMinutes();
        if (min.length === 1)
            min = "0" + min;

        let suffix = "AM";
        if (hours > 12) {
            hours -= 12;
            suffix = "PM";
        }


        return "Last update received at " + hours+ ":" + min + " " + suffix;
    }
}

export default Subscriber;
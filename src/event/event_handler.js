class EventHandler {
    constructor() {
        this._events = new Map();
    }

    on(name, func) {
        if (!this._events.has(name))
            this._events.set(name, []);

        this._events.get(name).push(func);
    }

    do(name, ...args) {
        if (this._events.has(name))
            for (const func of this._events.get(name))
                func(...args);

    }
}

export default EventHandler;
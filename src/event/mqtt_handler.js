/**
 * @module MQTTHandler
 * @fileoverview Contains MQTTHandler class.
 */

/**
 * @class
 * Handler for MQTT live data.
 */
class MQTTHandler {
    static BROKER_SERVER = 'ws://35.9.22.105:8083/mqtt';
    static BROKER_LOCAL = 'ws://localhost:8083/mqtt';

    static TOPIC = 'python/mqtt';

    /**
     * Create a new MQTT Handler.
     * @param {SceneManager} mgr Central scene manager
     * @param {boolean} server Whether to use server instead of localhost (false by default)
     * @param {Object} options Options for MQTT connection
     */
    constructor({
        mgr,
        server = false,
        options = {
            // Clean session
            clean: true,
            connectTimeout: 4000,
            // Authentication
            clientId: 'emqx_test',
            username: 'root',
            password: 'M0nG0$$w0rd'
        }
    }) {
        this.mgr = mgr;

        this.broker = MQTTHandler.BROKER_LOCAL;
        if (server)
            this.broker = MQTTHandler.BROKER_SERVER;

        this.client = mqtt.connect(this.broker, options);

        this.client.on("connect", () => this._onConnect());
        this.client.on("message", (topic, message) => this._onMessage(message.toString()));
        this.client.on("error", error => console.log("Connection failed: " + error));
    }


    // Handling

    /**
     * Handle MQTT connection.
     * @private
     */
    _onConnect() {
        this.client.subscribe(MQTTHandler.TOPIC, { qos: 0 }, (error, granted) => {
            if (error)
                console.log(error);
            else
                console.log('Connected to:' + this.broker);
        });
    }

    /**
     * Handle the receiving of live MQTT data.
     * @param {string} message String containing live data
     * @private
     */
    _onMessage(message){
        console.log("Parsing: " + message);
        const data = JSON.parse(message);

        let obj = this.mgr.getObjectById(data.id);
        if (obj === null) {
            console.log(data.id +' is NOT a valid object');
            return;
        }

        obj.handleLiveData(data);
    }
}

export default MQTTHandler;
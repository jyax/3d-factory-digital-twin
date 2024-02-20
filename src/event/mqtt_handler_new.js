class MQTTHandler {
    static BROKER_SERVER = 'ws://35.9.22.105:8083/mqtt';
    static BROKER_LOCAL = 'ws://localhost:8083/mqtt';

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

        this.broker = MQTTHandler.BROKER_SERVER;
        if (!server)
            this.broker = MQTTHandler.BROKER_LOCAL;

        this.client = mqtt.connect(this.broker, options);

        this.client.on("connect", () => this._onConnect());
        this.client.on("message", (topic, message) => this._onMessage(message.toString()));
        this.client.on("error", error => console.log("Connection failed: " + error));
    }

    _onConnect() {
        this.client.subscribe(topic, { qos: 0 }, function (error, granted) {
            if (error) {
                console.log(error)
            } else {
                console.log('Connected to:'+ this.broker)
            }
        });
    }

    _onMessage(message){
        console.log("Parsing: " + message);
        let parse = message.split(',');
        let obj = this.getObjectById(parse[0].toString());
        if(obj != null){
            obj.setX(parse[1]);
            obj.setY(parse[2]);
            obj.setZ(parse[3]);
            //obj.setTemp(parse[4]);
            //TODO: Add rotation
        }else{
            console.log(parse[0] +' is NOT a valid object');
        }
    }

    _onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Connection Lost: " + responseObject.errorMessage);
        }
    }
}

export default MQTTHandler;
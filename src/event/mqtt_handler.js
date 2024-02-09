import SceneManager from "../scene/scene_manager";
import SceneObject from "../scene/scene_object";

// MQTT Broker Configurations
var broker = "localhost:1883/mqtt"; // Update with your EMQ X broker WebSocket URL
var topic = "python/mqtt"; // Update with your MQTT topic

// Create a client instance
var client = new Paho.MQTT.Client(broker, "clientId_" + Math.random());

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });

// called when the client connects
function onConnect() {
    console.log("Connected");
    // subscribe to a topic
    client.subscribe(topic);
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("Message Arrived: " + message.payloadString);
    message = message.substring(1,message.length -1);
    parse = message.split(',');
    id = parse[0];
    parse.remove(0);
    floats = parse.split(',').map(item => parseFloat(item.trim()));
    SceneManager.forEach(SceneObject => {
        if(SceneObject.id == id){
            SceneObject.setPos(floats[0],floats[1],floats[2])
            //SET TEMP
            //SceneObject.setTemp(floats[3]);
        }
    });

    x = parse[1];
    x = parse[1];
    x = parse[1];
    x = parse[1];
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection Lost: " + responseObject.errorMessage);
    }
}

import SceneManager from "../scene/scene_manager";
import SceneObject from "../scene/scene_object";

// MQTT Broker Configurations
var broker = 'ws://35.9.22.105:8083/mqtt'; // Update with your EMQ X broker WebSocket URL
var topic = 'python/mqtt'; // Update with your MQTT topic

// Create a client instance
const options = {
    // Clean session
    clean: true,
    connectTimeout: 4000,
    // Authentication
    clientId: 'emqx_test',
    username: 'root',
    password: 'M0nG0$$w0rd',
  }

const client = mqtt.connect(broker, options);


// set callback handlers
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;

// connect the client
client.on('connect', () => onConnect());
// client.on('message', (topic, message)  => onMessageArrived(message));
client.on('message', (topic, message) => {
    console.log('receive message：', topic, message.toString())
  })
  client.on('error', (error) => {
    console.log('Connection failed:', error)
})
// called when the client connects
function onConnect() {
    console.log("Connected");
    // subscribe to a topic
    //client.subscribe(topic);
    client.subscribe(topic, { qos: 0 }, function (error, granted) {
        if (error) {
          console.log(error)
        } else {
          console.log(granted)
          console.log(client)
        }
      })
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("Message Arrived: " + message);
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
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection Lost: " + responseObject.errorMessage);
    }
}

export default{
    onConnect:onConnect,
    onMessageArrived:onMessageArrived,
    onConnectionLost:onConnectionLost,
    client:client,
    broker:broker,
    options:options



};

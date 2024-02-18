import SceneManager from "../scene/scene_manager.js";
import SceneObject from "../scene/scene_object.js";
// import { mgrRef } from "../components/FloorDisplay.vue"
// console.log(mgrRef)
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
   // console.log('received message：', topic, message.toString())
    onMessageArrived(message.toString())
    
  })
  client.on('error', (error) => {
    console.log('Connection failed:', error)
})



// called when the client connects
function onConnect() {
    //console.log("Connected");
    // subscribe to a topic
    //client.subscribe(topic);
    client.subscribe(topic, { qos: 0 }, function (error, granted) {
        if (error) {
          console.log(error)
        } else {
          //console.log(granted)
          //console.log(client)
          console.log('Connected to:'+ broker)
        }
      })
}

// called when a message arrives
function onMessageArrived(message) {  
    console.log("Parsing: " + message);
    let parse = message.split(',');
    let obj = window.manager.getObjectById(parse[0].toString());
    if(obj != null){
      obj.setX(parse[1]);
    }
            //SET TEMP
            //SceneObject.setTemp(floats[3]);
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

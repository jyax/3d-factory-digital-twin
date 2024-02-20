import SceneManager from "../scene/scene_manager.js";
import SceneObject from "../scene/scene_object.js";
// import { mgrRef } from "../components/FloorDisplay.vue"
// console.log(mgrRef)
// MQTT Broker Configurations
var broker;

//////TOGGLES TEST MODE//////
/////////////////////////////
/***************************/
/***/var server = true;/***/
/***************************/
/////////////////////////////


if(server){
  broker  = 'ws://35.9.22.105:8083/mqtt'; // Update w/EMQX WebSocket URL
}else{
  broker = 'ws://localhost:8083/mqtt';
}
var topic = 'python/mqtt'; //Test topic if changing we need to attach subscribers to objects

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

// connect the client
client.on('connect', () => onConnect());

// set callback handlers
client.on('message', (topic, message) => {onMessageArrived(message.toString())})
client.on('error', (error) => {console.log('Connection failed:', error)})

// called when the client connects
function onConnect() {
    // subscribe to a topic
    client.subscribe(topic, { qos: 0 }, function (error, granted) {
        if (error) {
          console.log(error)
        } else {
          console.log('Connected to:'+ broker)
        }
      })
}

// called when a message arrives
function onMessageArrived(message){  
    console.log("Parsing: " + message);
    let parse = message.split(',');
    let obj = window.manager.getObjectById(parse[0].toString());
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


// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection Lost: " + responseObject.errorMessage);
    }
}

//exports for other class use
export default{
  onConnect:onConnect,
  onMessageArrived:onMessageArrived,
  onConnectionLost:onConnectionLost,
  client:client,
  broker:broker,
  options:options
};

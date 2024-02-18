<script setup>
  import {onMounted, inject, ref} from "vue";
  import SceneManager from "../scene/scene_manager.js";
  import SceneObject from "../scene/scene_object.js";

  const mgr = inject('sceneManager')

</script>

<template>

</template>

<script>
  // MQTT Broker Configurations
  const broker = 'ws://35.9.22.105:8083/mqtt'; // Update with your EMQ X broker WebSocket URL
  const topic = 'python/mqtt'; // Update with your MQTT topic

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
    mgr.getObjectFromID(parse[0]).setPos(Number(parse[1]),Number(parse[2]),Number(parse[3]))
    //SET TEMP
    //SceneObject.setTemp(floats[3]);
  }



  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("Connection Lost: " + responseObject.errorMessage);
    }
  }

</script>
<style scoped>

</style>



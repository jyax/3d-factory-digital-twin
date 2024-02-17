<script setup>
import FloorDisplay from './components/FloorDisplay.vue'
import mqtt_handler  from "./components/MQTTHandler.vue"
</script>

<template>
  <FloorDisplay></FloorDisplay>
  <mqtt_handler></mqtt_handler>
  
</template>

<style scoped>
</style>

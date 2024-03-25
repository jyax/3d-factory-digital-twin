<script setup>
import FloorDisplay from './components/FloorDisplay.vue';
import SceneManager from './scene/scene_manager';

const mgr = new SceneManager();
mgr.init();

</script>

<template>
  <FloorDisplay :mgr="mgr"/>
  
</template>

<style scoped>
</style>

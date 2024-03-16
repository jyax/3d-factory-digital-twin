<script setup>
import FloorDisplay from './components/FloorDisplay.vue'
import OpeningPage from './components/OpeningPage.vue'
import BackToOpeningPage from './components/BackToOpeningPage.vue';
import { ref } from 'vue';
import SceneManager from './scene/scene_manager.js';
import { Engine3D } from "@orillusion/core";

// whether or not to show floor
// change to true if you dont want the opening page to show up
const showFloor = ref(false);

/**
 * Show the floor
 */
const ShowFloor = () => {
  showFloor.value = true;
  if (Engine3D.inputSystem) {
    Engine3D.inputSystem.canvas.hidden = false;
    //Engine3D.resume();
  }
}

/**
 * Show the opening page
 */
const ShowOpeningPage = () => {
  showFloor.value = false;
  Engine3D.inputSystem.canvas.hidden = true;
  //Engine3D.pause();
}
</script>

<template>
  <OpeningPage @create="ShowFloor" v-show="!showFloor"></OpeningPage>
  <FloorDisplay v-show="showFloor"></FloorDisplay>
  <BackToOpeningPage v-show="showFloor" @back="ShowOpeningPage"></BackToOpeningPage>
</template>

<style scoped>
</style>

<script setup>
import FloorDisplay from './components/FloorDisplay.vue'
import OpeningPage from './components/OpeningPage.vue'
import BackToOpeningPage from './components/BackToOpeningPage.vue';
import { ref } from 'vue';

// whether or not to show floor
// change to true if you dont want the opening page to show up
const showFloor = ref(false);

/**
 * Show the floor
 */
const ShowFloor = () => {
  showFloor.value = true;
}

/**
 * Show the opening page
 */
const ShowOpeningPage = () => {
  showFloor.value = false;
  console.log("back button pressed");
}
</script>

<template>
  <OpeningPage @create="ShowFloor" v-if="!showFloor"></OpeningPage>
  <FloorDisplay v-if="showFloor"></FloorDisplay>
  <BackToOpeningPage v-if="showFloor" @back="ShowOpeningPage"></BackToOpeningPage>
</template>

<style scoped>
</style>

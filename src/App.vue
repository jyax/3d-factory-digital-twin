<script setup>
import FloorDisplay from './components/FloorDisplay.vue'
import OpeningPage from './components/OpeningPage.vue'
import { ref } from 'vue';

// whether or not to show opening page
const showOpeningPage = ref(false);

/**
 * Show the opening page
 * @constructor
 */
const ShowOpeningPage = () => {
  showOpeningPage.value = true;
}
</script>

<template>
  <OpeningPage @create="ShowOpeningPage" v-if="!showOpeningPage"></OpeningPage>
  <FloorDisplay v-else></FloorDisplay>
</template>

<style scoped>
</style>

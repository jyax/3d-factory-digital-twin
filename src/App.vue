<script setup>
import FloorDisplay from './components/FloorDisplay.vue'
import OpeningPage from './components/OpeningPage.vue'
import { ref } from 'vue';

// whether or not to show floor
const showFloor = ref(false);

/**
 * Show the floor
 * @constructor
 */
const ShowFloor = () => {
  showFloor.value = true;
}
</script>

<template>
  <OpeningPage @create="ShowFloor" v-if="!showFloor"></OpeningPage>
  <FloorDisplay v-else></FloorDisplay>
</template>

<style scoped>
</style>

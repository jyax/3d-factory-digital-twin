

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import ImportFloor from './load_floor';

  onMounted(()=>{
    new ImportFloor().run();
  })
</script>

<template>
</template>

<style scoped>
</style>

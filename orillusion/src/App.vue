

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import ImportFloor from './load_floor';
  import Sample_MousePick from './test';
  import Sample_AddRemove from './test2';

  onMounted(()=>{
    new ImportFloor().run();
    // new Sample_MousePick().run();
    // new Sample_AddRemove().run();
  })
</script>

<template>
</template>

<style scoped>
</style>

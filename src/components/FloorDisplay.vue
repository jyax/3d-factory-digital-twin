<script setup>
  import {onMounted, ref} from "vue";
  import SceneManager from "../scene/scene_manager.js";
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";

  let mgr = new SceneManager();
  window.manager = mgr;
  
  const canvas = ref("canvas");

  onMounted(() => {
    mgr.init();
  });
</script>

<template>

  <canvas id="canvas" ref="canvas" @mousedown="mgr.startDrag" @mouseleave="mgr.stopDrag" @mouseup="mgr.stopDrag"></canvas>

  <object-info :mgr="mgr"/>
  <toolbar :mgr="mgr"/>
  <outline :mgr="mgr"/>
  <alert :mgr="mgr"/>

  <load-bar :mgr="mgr"/>

</template>

<style scoped>

</style>

<script>
  import Outline from "./Outline.vue";
  
  export default {
    components: {
      Outline
    }
  }
</script>
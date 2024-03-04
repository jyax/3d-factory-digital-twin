<script setup>
  import {onMounted, ref} from "vue";
  import SceneManager from "../scene/scene_manager.js";
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";

  let mgr = new SceneManager();
  window.manager = mgr;

  onMounted(() => {
    mgr.init();
  });
</script>

<template>

  <object-info :mgr="mgr"/>
  <toolbar :mgr="mgr"/>
  <outline :mgr="mgr"/>
  <alert :mgr="mgr"/>

  <load-bar :mgr="mgr"/>

</template>

<script>
  import Outline from "./Outline.vue";
  
  export default {
    components: {
      Outline
    }
  }
</script>
<script setup>
  import {onMounted, ref} from "vue";
  import SceneManager from "../scene/scene_manager.js";
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";
  import Login from "./Login.vue";
  
  const canvas = ref("canvas");

</script>

<template>

  <canvas id="canvas" ref="canvas" @mousedown="mgr.startDrag" @mouseleave="mgr.stopDrag" @mouseup="mgr.stopDrag"></canvas>
  <pancake :mgr="mgr"/>
  <object-info :mgr="mgr"/>
  <div v-if="editOn">
    <toolbar :mgr="mgr"/>
  </div>
  <login :mgr="mgr"/>
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
    },

    data () {
      return{
        editOn: true,
        mgr : new SceneManager()
      }
    },
    
    methods : {
      switchView() {
          this.editOn = !(this.editOn);
          console.log("switch", this.editOn);
      }
    },

    created() {
      this.mgr.init();
      this.mgr.events.on('switch view', this.switchView);
      window.manager = this.mgr;
    }
  }
</script>
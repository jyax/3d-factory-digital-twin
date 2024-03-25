<script setup>
  import {onMounted, ref} from "vue";
  import SceneManager from "../scene/scene_manager.js";
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";
  import Login from "./Login.vue";
  import Pancake from "./ViewButton.vue";
  
  const canvas = ref("canvas");

</script>

<template>

  <canvas id="canvas" ref="canvas" @mousedown="mgr.startDrag" @mouseleave="mgr.stopDrag" @mouseup="mgr.stopDrag"></canvas>
  <object-info :mgr="mgr"/>
  <div v-if="editOn">
    <toolbar :mgr="mgr"/>
  </div>
  <login :mgr="mgr"/>
  <outline :mgr="mgr"/>
  <alert :mgr="mgr"/>

  <load-bar :mgr="mgr"/>

</template>

<script>
  import Outline from "./outline/Outline.vue";
  
  export default {
    components: {
      Outline
    },

    props: {
      mgr: {
        type: SceneManager,
        required: true
      }
    },

    data () {
      return{
        editOn: true
      }
    },
    
    methods : {
      switchView() {
          this.editOn = !(this.editOn);
          console.log("switch", this.editOn);
      }
    },

    created() {
      this.mgr.events.on('switch view', this.switchView);
    }
  }
</script> 
<script setup>
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";
  import Login from "./Login.vue";
  import FileMenu from "./FileMenu.vue";

  import FileSelect from "./FileSelect.vue";

</script>

<template>
  <FileSelect :mgr="mgr" v-if="startMenuOn"/>
  <object-info :mgr="mgr"/>
  <toolbar v-if="editOn" :mgr="mgr"/>
  <file-menu :mgr="mgr"/>
  <login :mgr="mgr"/>
  <outline :mgr="mgr"/>
  <alert :mgr="mgr"/>

  <load-bar :mgr="mgr"/>

</template>

<script>
  import Outline from "./outline/Outline.vue";
  import SceneManager from "../scene/scene_manager.js";

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
        editOn: true,
        startMenuOn: true
      }
    },
    
    methods : {
      switchView() {
          this.editOn = !(this.editOn);
      },

      showStartMenu() {
        this.startMenuOn = false;
      }
    },

    created() {
      this.mgr.events.on('switch view', this.switchView);
      this.mgr.events.on('open project', this.showStartMenu);
      this.mgr.events.on('projects', () => this.startMenuOn = true);
    }
  }
</script> 
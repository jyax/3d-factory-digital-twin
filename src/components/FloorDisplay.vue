<script setup>
  import {onMounted} from "vue";
  import ObjectInfo from "./ObjectInfo.vue";
  import Toolbar from "./Toolbar.vue";
  import Alert from "./Alert.vue";
  import LoadBar from "./LoadBar.vue";
  import Login from "./Login.vue";
  import BackToOpeningPage from "./BackToOpeningPage.vue";
  import OpeningPage from "./OpeningPage.vue";
  import Pancake from "./ViewButton.vue";

  const canvas = ref("canvas");

</script>

<template>


  <div v-show="!openingPage" v-if="editOn">
    <toolbar :mgr="mgr"/>
  </div>
  <object-info v-show="!openingPage" :mgr="mgr"/>
  <login :mgr="mgr"/>
  <outline v-show="!openingPage" :mgr="mgr"/>
  <alert v-show="!openingPage" :mgr="mgr"/>

  <load-bar :mgr="mgr"/>

  <BackToOpeningPage v-show="!openingPage" :mgr="mgr" @back="openingPage = true"/>

  <OpeningPage v-show="openingPage" :mgr="mgr" @create="openingPage = false"></OpeningPage>

</template>

<style scoped>

</style>

<script>
  import Outline from "./Outline.vue";
  import {onMounted } from "vue";
  import SceneManager from "../scene/scene_manager.js";

  export default {
    components: {
      Outline
    },

    data () {
      return {
        openingPage: true,
        editOn: true,
        mgr : new SceneManager()
      }
    },

    methods: {
      switchView() {
          this.editOn = !(this.editOn);
          console.log("switch", this.editOn);
      }
    },

    watch: {
      openingPage(n, o) {
        this.mgr.setCanvasVisibility(!n);
      }
    },

    mounted() {
      this.mgr.init();
      this.mgr.events.on('switch view', this.switchView);
      window.manager = this.mgr;
    }
  }
</script>
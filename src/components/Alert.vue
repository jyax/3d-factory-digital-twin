<script setup>
function closeAlert() {}

import ObjectInfoText from "./info/ObjectInfoText.vue";
</script>

<template>
  <div class="alert-menu-parent" v-if="alerted">
    <div class="alert-menu">

      <div class="alert-header">

        <img class="alert-icon" src="../assets/icon/alert-icon.svg" alt="Alert Icon">
        <h1 class="alert-title">Alert!</h1>

      </div>

      <div class="alert-main">

        <h3>Issue detected at the following: <object-info-text name="Type:" value="Object"/></h3>

        <button @click="alerted = false">Ok</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.alert-menu-parent {
  position: absolute;
  bottom: 40%;
  left: 40%;
  height: 25%;
  width: 25%;
  max-width: 40%;
  max-height: 50%;
}

.alert-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 12px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}
.object-info-text{
  text-align: left;
}
.alert-main {
  display: flex;
  flex-direction: column;
  padding: 2px;
}
.alert-header {
  display: flex;
  flex-direction: row;

  user-select: none;
}
.alert-title
{
  flex: 1;
  font-size: 24px;
  font-weight: normal;
  margin: 0 8px 0 8px;
}
.alert-icon {
  filter: invert();
  width: 24px;
}
</style>

<script>
import SceneManager from "../scene/scene_manager.js";

export default {
  data() {
    return {
      alerted: true,
    }
  },
  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },
  methods: {
    closeAlert() {
      this.isAlertVisible = false;
    }
  },
  created() {
    this.mgr.events.on("alert", s=> this.selected = s);
  }
}
</script>
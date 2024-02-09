<script setup>

import ObjectInfoText from "./info/ObjectInfoText.vue";
import ObjectInfoPosition from "./info/ObjectInfoPosition.vue";
</script>

<template>
  <div id="info-parent" v-if="selected.length === 1">
    <div class="section" id="info">
      <div class="section-header">
        <img class="section-header-icon" src="../assets/icon/info-circle.svg" alt="Info">
        <h1 class="section-title">Object Info</h1>
      </div>
      <div class="section-inner">

        <object-info-text name="ID" :value="mgr.getFirstSelected().id"/>
        <object-info-text name="Type" value="Object"/>

        <object-info-position :mgr="mgr"/>

      </div>
    </div>
  </div>
</template>

<style scoped>

.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

#info-parent {
  position: absolute;
  bottom: 0;
  left: 0;

  max-height: 75%;
}

#info {
  margin-left: 12px;
  margin-bottom: 12px;

  padding: 12px;
}

.section-inner {
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  padding: 2px;
}

.section-header {
  display: flex;
  flex-direction: row;

  user-select: none;
}

.section-header-icon {
  filter: invert();

  width: 28px;
}

.section-title {
  flex: 1;

  font-size: 24px;
  font-weight: normal;
  margin: 0 8px 0 8px;
}

.section-header-button {
  display: flex;
  align-items: center;

  border-radius: 4px;
  cursor: pointer;
}

.section-header-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  outline: 1px solid rgba(255, 255, 255, 0.5);
}

.section-header-button .section-header-icon {
  width: 24px;
}

</style>

<script>
import SceneManager from "../scene/scene_manager.js";

export default {
  name: "ObjectInfo",

  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },

  data() {
    return {
      selected: []
    }
  },

  created() {
    this.mgr.events.on("select", s => this.selected = s);
  }
}
</script>
<script setup>

import ObjectInfoGeneral from "./info/general/ObjectInfoGeneral.vue";
import ObjectInfoSync from "./info/sync/ObjectInfoSync.vue";

</script>

<template>
  <div id="info-parent" v-if="selected.length === 1">
    <div class="section" id="info">
      <div class="section-header">
        <img class="section-header-icon" src="../assets/icon/info-circle.svg" alt="Info">
        <div class="info-tabs">
          <div class="info-tab" @click="tab = 'general'" :class="tabStyle('general')">
            <img class="section-header-icon" src="../assets/icon/book.svg" alt="General">
            <p>General</p>
          </div>
          <div class="info-tab" @click="tab = 'live_data'" :class="tabStyle('live_data')">
            <img class="section-header-icon" src="../assets/icon/wifi.svg" alt="General">
            <p>Live Data</p>
          </div>
        </div>
      </div>

      <object-info-general :object="object" :key="object" v-if="tab === 'general'"/>

      <object-info-sync :object="object" :key="object" v-if="tab === 'live_data'"/>

    </div>
  </div>
</template>

<style scoped>

.section {
  display: flex;
  flex-direction: column;
}

#info-parent {
  position: absolute;
  top: 0;
  left: 0;

  min-width: 20%;
  max-width: 25%;
  max-height: 75%;
}

#info {
  margin-left: 12px;
  margin-top: 12px;
}

.section-header {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 8px;

  user-select: none;
}

.section-header-icon {
  filter: invert();

  width: 28px;

  margin-left: 4px;
}

.info-tabs {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-left: 4px;
}

.info-tab {
  flex: 1;
  display: flex;
  flex-direction: row;

  margin-left: 6px;
  padding: 8px;

  border-radius: 4px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  cursor: pointer;
}

.info-tab:hover {
  background-color: rgba(100, 100, 100, 0.15);
}

.info-tab-current {
  outline: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
}

.info-tab img {
  width: 20px;

  opacity: 75%;
}

.info-tab p {
  margin: 0 0 0 6px;

  opacity: 75%;
}

.info-tab-current img, .info-tab-current p {
  opacity: 100%;
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

.hint {
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #a2a2a2;
  font-style: italic;
}

.single-input {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 16px;
}

.single-input-left {
  display: flex;
  flex-direction: column;
}

.color-input {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.color-input p {
  margin: 0;
  margin-right: 10px;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  padding: 2px;
  border-radius: 9px;
  height: 36px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 4px;

  outline: 1px solid rgba(255, 255, 255, 0.2);

  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch:hover {
  border: none;
  border-radius: 4px;

  outline: 1px solid rgba(255, 255, 255, 0.6);
}

input[type="color"]::-webkit-color-swatch:hover {
  outline: 1px solid white;
}

.gradient-dots {
  display: flex;
  justify-content: end;
  padding-right: 10px;

  margin-top: 4px;
  margin-bottom: 4px;
}

#color-gradient {
  margin-left: 8px;
  width: 20px;

  outline: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50em;
}

.single-input-input {
  margin-right: 8px;
}

</style>

<script>
import SceneManager from "../scene/scene_manager.js";
import ColorGradient from "../color/color_gradient.js";

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
      listener: null,

      selected: [],
      object: null,
      tab: "general"
    }
  },

  methods: {
    tabStyle(str) {
      if (str === this.tab)
        return "info-tab-current";
      else
        return "";
    },

    update(sel) {
      this.selected = sel;
      this.object = this.mgr.getFirstSelected();
    }
  },

  created() {
    this.listener = this.mgr.events.on("select", sel => this.update(sel));
    this.mgr.events.on("switch view", this.switchView);

    this.update(this.mgr.getSelected());
  },

  destroyed() {
    if (this.listener !== null)
      this.mgr.events.remove(this.listener);
  }
}
</script>
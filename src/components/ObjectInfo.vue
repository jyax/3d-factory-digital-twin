<script setup>

import ObjectInfoGeneral from "./info/general/ObjectInfoGeneral.vue";
import ObjectInfoSync from "./info/sync/ObjectInfoSync.vue";

</script>

<!-- Root component for displaying information about the currently selected object. -->
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

      <div class="section-body">
        <object-info-general :object="object" :key="object" v-if="tab === 'general'"/>
        <object-info-sync :object="object" :key="object" v-if="tab === 'live_data'"/>
      </div>

    </div>
  </div>
</template>

<style scoped>

.section {
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
}

#info-parent {
  position: absolute;
  top: 0;
  left: 0;

  min-width: 20%;
  max-width: 25%;

  overflow-y: scroll;
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

.section-body {
  overflow-y: scroll;
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

.section-header-button .section-header-icon {
  width: 24px;
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
      listener: null,

      selected: [],
      object: null,
      tab: "general"
    }
  },

  methods: {
    /**
     * Get the CSS styling to indicate whether a tab is currently selected.
     * @param {string} str Tab ID to check
     * @returns {string} CSS class name
     */
    tabStyle(str) {
      if (str === this.tab)
        return "info-tab-current";
      else
        return "";
    },

    /**
     * Update currently displayed information upon selecting an object.
     * @param {SceneObject[]} sel List of currently selected objects
     */
    update(sel) {
      this.selected = sel;
      this.object = this.mgr.getFirstSelected();
    },

    /**
     * Handle the toggling between view and edit mode.
     */
    switchView() {
      this.editMode = !this.editMode;
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
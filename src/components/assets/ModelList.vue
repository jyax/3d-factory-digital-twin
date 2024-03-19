<template>

  <div id="models-parent">
    <div class="section" id="info">
      <div class="section-header">
        <img class="section-header-icon" src="../../assets/icon/folder.svg" alt="Models" draggable="false">
        <p class="section-title">Models</p>
      </div>

      <div class="section-inner">

        <input class="input" v-model="filter" type="text" placeholder="Filter..."
               @input="doFilter">

        <p class="hint" v-if="list.length === 0">There are no models loaded.</p>

        <div class="list-inner">

          <model-list-entry v-for="id of filteredList" key="id" :model-i-d="id" :mgr="mgr"/>

        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>

#models-parent {
  position: absolute;
  bottom: 0;
  left: 0;

  min-width: 10%;
  max-width: 15%;
  max-height: 60%;

  overflow: scroll;
}

.section {
  display: flex;
  flex-direction: column;

  overflow: scroll;
}

#info {
  margin-left: 12px;
  margin-bottom: 12px;
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

  font-size: 20px;
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

.section-inner {
  display: flex;
  flex-direction: column;

  padding: 8px 8px 0 8px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  overflow: scroll;
}

.list-inner {
  display: flex;
  flex-direction: column;

  overflow: scroll;
}

.hint {
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #a2a2a2;
  font-style: italic;

  user-select: none;
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

.input {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  margin-bottom: 8px;

  padding: 8px;

  font-size: 16px;
  text-align: center;

  width: 100%;
  box-sizing: border-box;
}

.input:hover, .input:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.input:focus {
  color: rgba(255, 255, 255, 0.8);
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

</style>

<script>

import SceneManager from "../../scene/scene_manager.js";
import ObjectInfoSync from "../info/sync/ObjectInfoSync.vue";
import ObjectInfoGeneral from "../info/general/ObjectInfoGeneral.vue";
import ObjectInfoText from "../info/ObjectInfoText.vue";
import ObjectInfoPosition from "../info/ObjectInfoPosition.vue";
import ObjectInfoID from "../info/ObjectInfoID.vue";
import ObjectInfoRotation from "../info/ObjectInfoRotation.vue";
import ObjectInfoInput from "../info/ObjectInfoInput.vue";
import ObjectInfoModel from "../info/ObjectInfoModel.vue";
import ModelListEntry from "./ModelListEntry.vue";

export default {
  components: {
    ModelListEntry,
    ObjectInfoModel,
    ObjectInfoInput,
    ObjectInfoRotation,
    ObjectInfoID,
    ObjectInfoPosition,
    ObjectInfoText,
    ObjectInfoGeneral, ObjectInfoSync},
  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },

  data() {
    return {
      list: [],
      filteredList: [],
      filter: ""
    }
  },

  methods: {
    doFilter() {
      this.filteredList = this.list.filter(val => val.includes(this.filter));
    }
  },

  created() {
    this.mgr.events.on("models", list => {
      this.list = [...list];
      this.doFilter();
    });
  }
};

</script>
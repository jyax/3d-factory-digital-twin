<script setup>

import ObjectInfoText from "./info/ObjectInfoText.vue";
import ObjectInfoPosition from "./info/ObjectInfoPosition.vue";
import ObjectInfoID from "./info/ObjectInfoID.vue";
import ObjectInfoModel from "./info/ObjectInfoModel.vue";
import ObjectInfoInput from "./info/ObjectInfoInput.vue";
import ObjectInfoDropdown from "./info/ObjectInfoDropdown.vue";
import ObjectInfoRotation from "./info/ObjectInfoRotation.vue";
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
            <p>Sync</p>
          </div>
        </div>
      </div>

      <div class="section-inner" v-show="tab === 'general'">

        <object-info-text name="Type" value="Object"/>

        <object-info-i-d :mgr="mgr" label="ID" placeholder="Optional"/>

        <object-info-model :mgr="mgr"/>

        <object-info-position :mgr="mgr"/>
        <object-info-rotation :mgr="mgr"/>

        <object-info-input :mgr="mgr" label="Scale" placeholder="1" :on-change="val => setScale(val)"
                           style="margin-top: 16px;"/>

      </div>

      <div class="section-inner" v-show="tab === 'live_data'">

        <object-info-i-d :mgr="mgr" label="ID" placeholder="Optional"/>
        <p class="hint">Objects will not receive live data unless they have an ID.</p>

        <object-info-dropdown label="Data type" :options="data_type_options" :default="data_type"
                              :on-change="val => data_type = val"/>
        <object-info-input :mgr="mgr" v-show="data_type === 'single value'" label="Default value" placeholder="0"
                           :on-change="value => this.default = value"/>

        <div class="single-input">
          <div class="single-input-left">
            <div class="color-input">
              <p>Min</p>
              <input class="input single-input-input" type="text" placeholder="0" v-model="min">
              <input type="color" v-model="color_1">
            </div>
            <div class="gradient-dots">
              <img class="section-header-icon" src="../assets/icon/more-vert.svg" alt="Gradient">
            </div>
            <div class="color-input">
              <p>Max</p>
              <input class="input single-input-input" type="text" placeholder="100" v-model="max">
              <input type="color" v-model="color_2">
            </div>
          </div>
          <div class="single-input-right" id="color-gradient" :style="makeGradient()"></div>
        </div>

      </div>

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

  max-width: 35%;
  max-height: 75%;
}

#info {
  margin-left: 12px;
  margin-top: 12px;
}

.section-inner {
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  padding: 12px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
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

  margin-left: 2px;
}

.info-tab {
  flex: 1;
  display: flex;
  flex-direction: row;

  margin-left: 6px;
  padding: 8px;

  border-radius: 4px;

  background-color: rgba(0, 0, 0, 0.1);

  cursor: pointer;
}

.info-tab:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.info-tab-current {
  outline: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
}

.info-tab img {
  width: 20px;
}

.info-tab p {
  margin: 0 0 0 6px;
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
import {Color, Vector3} from "@orillusion/core";

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
      tab: "general",

      data_type_options: ["Single value", "Position", "Rotation"],
      data_type: "single value",

      min: 0,
      max: 100,
      default: 0,

      color_1: "#5dc938",
      color_2: "#f24f44",

      gradient: new ColorGradient()
    }
  },

  methods: {
    tabStyle(str) {
      if (str === this.tab)
        return "info-tab-current";
      else
        return "";
    },

    setScale(val) {
      const obj = this.mgr.getFirstSelected();
      if (obj === null)
        return;

      let scale = 1;
      if (val !== "")
        scale = parseFloat(val);

      obj.getObject3D().transform.localScale = new Vector3(scale, scale, scale);
    },

    makeGradient() {
      const c1 = new Color();
      c1.setHex(this.color_1);

      const c2 = new Color();
      c2.setHex(this.color_2);

      this.gradient.clear();
      this.gradient.set(0, c1);
      this.gradient.set(1, c2);

      const min = parseFloat(this.min);
      const max = parseFloat(this.max);
      let val = 0;
      if (this.default !== "")
        val = parseFloat(this.default);

      const d = (val - min) / (max - min);

      let color;
      if (val <= min)
        color = c1;
      else if (val >= max)
        color = c2;
      else
        color = this.gradient.get(d);

      const object = this.mgr.getFirstSelected();
      if (object !== null)
        object.setSolidColor(color);

      return "background-image: linear-gradient(to bottom, " + this.color_1 + ", " + this.color_2 + ");"
    }
  },

  created() {
    this.listener = this.mgr.events.on("select", sel => this.selected = sel);
  },

  destroyed() {
    if (this.listener !== null)
      this.mgr.events.remove(this.listener);
  }
}
</script>
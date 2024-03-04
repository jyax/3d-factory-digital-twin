<script setup>

</script>

<template>

  <div class="single-input">
    <div class="single-input-left">
      <div class="color-input">
        <p>Min</p>
        <input class="input single-input-input" type="text" placeholder="0" v-model="min">
        <input type="color" v-model="color_1">
      </div>
      <div class="gradient-dots">
        <img class="section-header-icon" src="../../../../assets/icon/more-vert.svg" alt="Gradient">
      </div>
      <div class="color-input">
        <p>Max</p>
        <input class="input single-input-input" type="text" placeholder="100" v-model="max">
        <input type="color" v-model="color_2">
      </div>
    </div>
    <div class="single-input-right" id="color-gradient" :style="makeGradient()"></div>
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

  min-width: 25%;
  max-width: 30%;
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

  margin-top: 8px;
  margin-bottom: 16px;
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
  border-radius: 8px;
  height: 36px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 4px;

  outline: 1px solid rgba(255, 255, 255, 0.5);

  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch:hover {
  border: none;

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
  border-radius: 4px;
}

.single-input-input {
  margin-right: 8px;
}

.label {
  text-align: left;
  margin: 4px 4px 8px 0;

  font-weight: bold;
}

</style>

<script>

import Subscriber from "../../../../scene/subscriber.js";
import ColorGradient from "../../../../color/color_gradient.js";
import {Color} from "@orillusion/core";

export default {
  name: "SyncSubscriberSingleValue",

  props: {
    subscriber: {
      type: Subscriber,
      required: true
    }
  },

  data() {
    return {
      min: 0,
      max: 100,
      default: 0,

      color_1: "#5dc938",
      color_2: "#f24f44",

      gradient: new ColorGradient()
    }
  },

  methods: {

    makeGradient() {
      const c1 = new Color();
      c1.setHex(this.color_1);

      const c2 = new Color();
      c2.setHex(this.color_2);

      this.gradient.clear();
      this.gradient.set(0, c1);
      this.gradient.set(1, c2);

      const s = this.subscriber;

      s.min = this.min;
      s.max = this.max;
      s.gradient = this.gradient;

      return "background-image: linear-gradient(to bottom, " + this.color_1 + ", " + this.color_2 + ");"
    },
  },

  created() {

  }
};

</script>
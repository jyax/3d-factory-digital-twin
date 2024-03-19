<script setup>

import ObjectInfoInput from "../ObjectInfoInput.vue";
import ObjectInfoText from "../ObjectInfoText.vue";
import ObjectInfoID from "../ObjectInfoID.vue";
import ObjectInfoModel from "../ObjectInfoModel.vue";
import ObjectInfoRotation from "../ObjectInfoRotation.vue";
import ObjectInfoPosition from "../ObjectInfoPosition.vue";
</script>

<template>

  <div class="section-inner">

    <object-info-text name="Type" value="Object"/>

    <object-info-i-d :object="object" label="ID" placeholder="Optional"/>

    <object-info-model :object="object"/>

    <object-info-position :object="object"/>
    <object-info-rotation :object="object"/>

    <object-info-input label="Scale" placeholder="1" :on-change="val => setScale(val)"
                       style="margin-top: 16px;"/>

  </div>

</template>

<style scoped>

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

.info-tab img {
  width: 20px;
}

.info-tab p {
  margin: 0 0 0 6px;
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

import {Vector3} from "@orillusion/core";
import SceneObject from "../../../scene/scene_object.js";

export default {
  name: "ObjectInfoGeneral",

  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  methods: {
    setScale(val) {
      let scale = 1;
      if (val !== "")
        scale = parseFloat(val);

      this.object.getObject3D().transform.localScale = new Vector3(scale, scale, scale);
    }
  }
};

</script>
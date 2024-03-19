<template>
  <p class="input-label">Rotation</p>
  <div class="input-vector">

    <input class="input-vector-comp c-x" v-model="xVal" type="text" placeholder="x"
           @input="doChange" v-on:keyup.enter="blurInput">

    <input class="input-vector-comp c-y" v-model="yVal" type="text" placeholder="y"
           @input="doChange" v-on:keyup.enter="blurInput">

    <input class="input-vector-comp c-z" v-model="zVal" type="text" placeholder="z"
           @input="doChange" v-on:keyup.enter="blurInput" style="margin-right: 0;">

  </div>
</template>

<style scoped>

.input-label {
  margin: 16px 0 4px;

  text-align: left;
  font-weight: bold;
}

.input-vector {
  border-radius: 4px;

  display: flex;
  flex-direction: row;
}

.input-vector-comp {
  flex: 1;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  padding: 8px;

  font-size: 16px;

  margin-right: 6px;

  width: 72px;
}

.c-x {
  color: #d77373;
}

.c-y {
  color: #75bb6e;
}

.c-z {
  color: #7276d7;
}

.input-vector-comp:hover, .input-vector-comp:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.input-vector-comp:focus {
  color: rgba(255, 255, 255, 0.8);
}

.input-vector-comp::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

</style>

<script>
import {Vector3} from "@orillusion/core";
import SceneObject from "../../scene/scene_object.js";

export default {
  name: "ObjectInfoRotation",

  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  data() {
    return {
      rot: new Vector3(),

      xVal: 0,
      yVal: 0,
      zVal: 0,

      enableUpdate: true
    }
  },

  methods: {
    doChange() {
      this.rot = new Vector3(
          parseFloat(this.xVal),
          parseFloat(this.yVal),
          parseFloat(this.zVal)
      );

      this.object.setRot(this.rot.clone());
    },

    blurInput(e) {
      e.target.blur();
    }
  },

  created() {
    this.rot = this.object.getObject3D().localRotation;

    this.xVal = Math.floor(this.rot.x * 100) / 100;
    this.yVal = Math.floor(this.rot.y * 100) / 100;
    this.zVal = Math.floor(this.rot.z * 100) / 100;
  }
}
</script>
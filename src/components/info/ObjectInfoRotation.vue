<!-- Handles the displaying and changing of the rotation of a SceneObject. -->
<template>
  <p class="input-label">Rotation</p>
  <div class="input-vector">

    <input class="input-vector-comp c-x" v-model="xVal" type="text" placeholder="x"
           @input="doX" v-on:keyup.enter="blurInput" @blur="blurX" :disabled="!editMode">

    <input class="input-vector-comp c-y" v-model="yVal" type="text" placeholder="y"
           @input="doY" v-on:keyup.enter="blurInput" @blur="blurY" :disabled="!editMode">

    <input class="input-vector-comp c-z" v-model="zVal" type="text" placeholder="z"
           @input="doZ" v-on:keyup.enter="blurInput" @blur="blurZ" style="margin-right: 0;" :disabled="!editMode">

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
import Util from "../../util/util.js";

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

      editMode: true
    }
  },

  methods: {
    /**
     * Handle the change of the rotation around the x-axis.
     */
    doX() {
      if (this.xVal.length > 0 && Util.isNumber(this.xVal))
        this.object.rotX = parseFloat(this.xVal);
    },

    /**
     * Handle when the x-value input is no longer focused.
     */
    blurX() {
      this.xVal = this.object.rotX;
    },

    /**
     * Handle the change of the rotation around the y-axis.
     */
    doY() {
      if (this.yVal.length > 0 && Util.isNumber(this.yVal))
        this.object.rotY = parseFloat(this.yVal);
    },

    /**
     * Handle when the y-value input is no longer focused.
     */
    blurY() {
      this.yVal = this.object.rotY;
    },

    /**
     * Handle the change of the rotation around the z-axis.
     */
    doZ() {
      if (this.zVal.length > 0 && Util.isNumber(this.zVal))
        this.object.rotZ = parseFloat(this.zVal);
    },

    /**
     * Handle when the z-value input is no longer focused.
     */
    blurZ() {
      this.zVal = this.object.rotZ;
    },

    /**
     * Focus out of a text input box.
     * @param e Event
     */
    blurInput(e) {
      e.target.blur();
    },

    /**
     * Update the values of the inputs based on the object's rotation.
     */
    update() {
      this.xVal = Math.floor(this.rot.x * 100) / 100;
      this.yVal = Math.floor(this.rot.y * 100) / 100;
      this.zVal = Math.floor(this.rot.z * 100) / 100;
    },

    /**
     * Handle the toggling between view and edit mode.
     */
    switchView() {
      this.editMode = !this.editMode;
    }
  },

  created() {
    this.rot = this.object.getObject3D().localRotation;

    this.update();

    this.object.events.on("rot", rot => {
      this.rot = rot.clone();
      this.update();
    });

    this.editListener = this.object.mgr.events.on("switch view", this.switchView);
  },

  destroyed() {
    this.object.mgr.events.remove(this.editListener);
  }
}
</script>
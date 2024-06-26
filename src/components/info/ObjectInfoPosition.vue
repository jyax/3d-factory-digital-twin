<!-- Handles the displaying and changing of the position of a SceneObject. -->
<template>
  <p class="input-label">Position</p>
  <div class="input-vector">

    <input class="input-vector-comp c-x" v-model="xVal" type="text" placeholder="x"
           @input="doX" v-on:keyup.enter="blurInput" :disabled="!editMode">

    <input class="input-vector-comp c-y" v-model="yVal" type="text" placeholder="y"
           @input="doY" v-on:keyup.enter="blurInput" :disabled="!editMode">

    <input class="input-vector-comp c-z" v-model="zVal" type="text" placeholder="z"
           @input="doZ" v-on:keyup.enter="blurInput" style="margin-right: 0;" :disabled="!editMode">

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
  name: "ObjectInfoPosition",

  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  data() {
    return {
      pos: new Vector3(),

      xVal: 0,
      yVal: 0,
      zVal: 0,

      editMode: true
    }
  },

  methods: {
    /**
     * Handle the change of the position along the x-axis.
     */
    doX() {
      this.object.X = parseFloat(this.xVal);
    },

    /**
     * Handle the change of the position along the y-axis.
     */
    doY() {
      this.object.Y = parseFloat(this.yVal);
    },

    /**
     * Handle the change of the position along the z-axis.
     */
    doZ() {
      this.object.Z = parseFloat(this.zVal);
    },

    /**
     * Focus out of a text input box.
     * @param e Event
     */
    blurInput(e) {
      e.target.blur();
    },

    /**
     * Update the values of the inputs based on the object's position.
     */
    update() {
      this.xVal = Math.floor(this.pos.x * 100) / 100;
      this.yVal = Math.floor(this.pos.y * 100) / 100;
      this.zVal = Math.floor(this.pos.z * 100) / 100;
    },

    /**
     * Handle the toggling between view and edit mode.
     */
    switchView() {
      this.editMode = !this.editMode;
    }
  },  

  created() {
    this.pos = this.object.pos;

    this.update();

    this.object.events.on("pos", pos => {
      this.pos = pos.clone();
      this.update();
    });

    this.editListener = this.object.mgr.events.on("switch view", this.switchView);
  },

  destroyed() {
    this.object.mgr.events.remove(this.editListener);
  }
}

</script>
<template>

  <div class="model-parent">
    <p class="label">Data Type</p>

    <select class="dropdown" v-model="current" @change="doChange()">
      <option v-for="id of options" :value="id.toLowerCase()">{{id}}</option>
    </select>
  </div>

</template>

<style scoped>

.model-parent {
  display: flex;
  flex-direction: row;
}

.label {
  display: flex;
  align-items: center;

  flex: 1;
  margin: 0;

  text-align: left;
  font-weight: bold;
  user-select: none;
}

.dropdown {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  padding: 8px;

  font-size: 16px;

  cursor: pointer;
}

.dropdown:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

option {
  background-color: rgb(59, 59, 59);
}

</style>

<script>

import SceneManager from "../../scene/scene_manager.js";

export default {
  props: {
    mgr: {
      type: SceneManager,
      required: true
    },
    onChange: {
      default: val => {}
    }
  },

  data() {
    return {
      options: ["Single Value", "Position", "Rotation"],
      current: "single value"
    }
  },

  methods: {
    doChange() {
      this.mgr.getFirstSelected().setModel(this.current);
      this.onChange(this.current);
    },

    update() {}
  }
}

</script>
<!-- Dropdown for selecting a model for a SceneObject. -->
<template>

  <div class="model-parent">
    <p class="label">Model</p>

    <select class="dropdown" v-model="current" @change="doChange()" :disabled="!enableUpdate">
      <option value="">Default</option>
      <option v-for="id of options" :value="id">{{id}}</option>
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

import SceneObject from "../../scene/scene_object.js";

export default {
  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  data() {
    return {
      options: Array.from(this.object.mgr.models.keys()).filter(id => id[0] !== '.'),
      current: this.object.modelID,

      listener: null,

      enableUpdate: true
    }
  },

  methods: {
    /**
     * Handle the changing of the selected model.
     */
    doChange() {
      this.object.setModel(this.current);
    }
  },

  created() {
    this.current = this.object.modelID;
  }
}

</script>
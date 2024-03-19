<template>

  <div class="listing" @click="createObject">
    <p class="listing-name">{{modelID}}</p>
  </div>

</template>

<style scoped>

.listing {
  display: flex;
  flex-direction: row;

  padding: 4px 8px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  margin-bottom: 8px;

  cursor: pointer;
  user-select: none;
}

.listing:hover {
  background-color: rgba(103, 103, 103, 0.15);
}

.listing-name {
  flex: 1;

  margin: 4px;
  text-align: left;

  font-size: 15px;
}

.anonymous {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.listing-buttons {
  display: none;
  align-items: center;
}

.listing:hover .listing-buttons {
  display: flex;
}

.listing-button {
  display: flex;
  align-items: center;

  margin-left: 4px;

  filter: invert();
  opacity: 30%;
  width: 18px;

  padding: 4px;
  border-radius: 4px;
}

.listing-button:hover {
  opacity: 60%;
  background-color: rgba(0, 0, 0, 0.2);
}

.listing-selected {
  outline: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
}

.listing-selected .listing-buttons {
  display: flex;
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
    modelID: {
      required: true
    }
  },

  methods: {
    createObject() {
      this.mgr.createNewObject({
        pos: this.mgr.getCameraForward().mul(8),
        model: this.modelID
      });
    }
  }
};

</script>
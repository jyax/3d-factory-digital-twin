<template>
  <div class="listing" @click="doClick">

    <p class="listing-name">{{ id }}</p>

    <img src="../assets/icon/download.svg" alt="Download" v-if="external">

    <div class="listing-buttons"></div>

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
}

.listing img {
  filter: invert();
  opacity: 0.6;
  width: 1.5rem;
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
import SceneManager from "../scene/scene_manager.js";

export default {
  name: "AssetListing",

  props: {
    id: {
      required: true
    },

    mgr: {
      type: SceneManager,
      required: true
    },

    external: {
      default: false
    }
  },

  methods: {
    doClick() {
      if (this.external) {
        this.mgr.getModelFromDB(this.id)
      } else {
        this.mgr.createNewObject({
          model: this.id
        });
      }
    }
  }
};
</script>
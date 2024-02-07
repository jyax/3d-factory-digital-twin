<template>
  <div class="listing" @click="this.object.select()" :class="dynamicStyle">
    <p class="listing-name">{{object.name}}</p>
    <div class="listing-buttons">
      <img class="listing-button" src="../../icon/lock-slash.svg" alt="Lock">
      <img class="listing-button" src="../../icon/trash.svg" alt="Delete" @click.stop="object.delete()">
    </div>
  </div>
</template>

<style>
.listing {
  display: flex;
  flex-direction: row;

  padding: 8px;

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
  import SceneObject from "../scene/scene_object.js";

  export default {
    name: "OutlineListing",

    props: {
      object: {
        type: SceneObject,
        required: true
      }
    },

    data() {
      return {
        selected: false
      }
    },

    computed: {
      dynamicStyle() {
        return this.selected
        ? "listing-selected"
        : ""
      }
    },

    created() {
      this.object.mgr.events.on("select", () => {
        this.selected = this.object.isSelected();
      });
    }
  };
</script>
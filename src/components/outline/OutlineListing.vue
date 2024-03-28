<template>
  <div class="listing" @click="this.object.select(); this.object.mouseOff()" :class="dynamicStyle" @mouseover="this.object.mouseOver()"
       @mouseout="this.object.mouseOff()">
    <p class="listing-name anonymous" v-if="name === ''">Object</p>
    <p class="listing-name" v-if="name !== ''">{{name}}</p>
    <div class="listing-buttons">
      <img class="listing-button" src="../../assets/icon/lock-slash.svg" alt="Lock" @click.stop="object.toggleLock()"
           v-if="!locked">
      <img class="listing-button locked-button" src="../../assets/icon/lock.svg" alt="Lock" @click.stop="object.toggleLock()"
           v-if="locked">
      <!--
      <img class="listing-button" src="../assets/icon/trash.svg" alt="Delete" @click.stop="doDelete()">
      -->
    </div>
  </div>
</template>

<style scoped>
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
  import SceneObject from "../../scene/scene_object.js";

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
        selectListener: null,
        renameListener: null,
        lockedListener: null,
        selected: false,
        name: "",
        locked: false
      }
    },

    computed: {
      dynamicStyle() {
        return this.selected
        ? "listing-selected"
        : ""
      }
    },

    methods: {
      update() {
        this.selected = this.object.isSelected();
        this.name = this.object.id;
        this.locked = this.object.locked;
      },

      doDelete() {
        this.object.delete();
      }
    },

    created() {
      this.selectListener = this.object.mgr.events.on("select", () => this.update());
      this.renameListener = this.object.events.on("rename", () => this.update());
      this.lockedListener = this.object.events.on("lock", () => this.update());

      this.update();
    },

    destroyed() {
      this.mgr.events.remove(this.selectListener);
      this.object.events.remove(this.renameListener);
      this.object.events.remove(this.lockedListener);
    }
  };
</script>
<script setup>
  const title = "Outline";
</script>

<template>
  <div id="outline-parent">
    <div class="section" id="outline">
      <div class="section-header">
        <img class="section-header-icon" src="../assets/icon/list.svg" alt="List" draggable="false">
        <h1 class="section-title">{{ title }}</h1>
        <div class="section-header-button">
          <img class="section-header-icon" src="../assets/icon/nav-arrow-up.svg" alt="Arrow"
               draggable="false" v-if="!collapsed" @click="collapsed = true">
          <img class="section-header-icon" src="../assets/icon/nav-arrow-down.svg" alt="Arrow"
               draggable="false" v-else @click="collapsed = false">
        </div>
      </div>
      <div class="section-inner" v-if="!collapsed">
        <p class="empty" v-if="list.length === 0">There are no objects.</p>
        <outline-listing v-for="val of list" :object="val"></outline-listing>
      </div>
    </div>
  </div>
</template>

<style>

/** Scrollbar **/

::-webkit-scrollbar {
  width: 8px;
  display: none;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 50em;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(79, 79, 79, 0.25);
}

::-webkit-scrollbar-thumb:active {
  background: rgba(51, 51, 51, 0.25);
}

::-webkit-scrollbar-button {
  display: none;
}

</style>

<style scoped>

.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  overflow: auto;
}

#outline-parent {
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  max-height: 100%;

  overflow: scroll;
}

#outline {
  margin-top: 12px;
  margin-right: 12px;
  margin-bottom: 12px;

  overflow: scroll;

  padding-bottom: 0;
}

.section-header {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;

  user-select: none;
}

.section-header-icon {
  filter: invert();

  width: 28px;
}

.section-title {
  flex: 1;

  font-size: 24px;
  font-weight: normal;
  margin: 0 24px 0 24px;
}

.section-header-button {
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
}

.section-header-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.section-header-button .section-header-icon {
  width: 24px;
}

.section-inner {
  display: flex;
  flex-direction: column;

  overflow: scroll;

  width: 100%;

  padding: 2px;
}

.empty {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
}

</style>

<script>
  import OutlineListing from "./OutlineListing.vue";
  import SceneManager from "../scene/scene_manager.js";
  import {reactive} from "vue";

  export default {
    name: "Outline",

    components: {
      OutlineListing
    },

    props: {
      mgr: {
        type: SceneManager,
        required: true
      }
    },

    data() {
      return {
        list: reactive([]),
        collapsed: false
      };
    },

    methods: {
      addObject(object) {
        this.list.push(object);
      },
      removeObject(object) {
        this.list.splice(this.list.indexOf(object), 1);
      }
    },

    created() {
      this.mgr.events.on("add", object => this.addObject(object));
      this.mgr.events.on("delete", object => this.removeObject(object));
    }
  }
</script>
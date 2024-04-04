<script setup>

import AssetListing from "./AssetListing.vue";
</script>

<template>

  <input id="upload-model" ref="modelUpload" type="file" @change="fileUploaded" multiple>

  <div class="section" id="files">
    <div class="section-inner tools-inner">

      <div id="assets" v-if="showAssets">

        <p class="assets-title">Models</p>

        <div id="assets-inner">
          <p class="external-label" style="text-align: center; margin-top: 0;"
             v-if="models.length === 0">There are no models in this project.</p>
          <asset-listing v-for="id of filteredModels" :id="id" :mgr="mgr"/>
          <p class="external-label" v-if="filteredExternalModels.length > 0">Also available...</p>
          <asset-listing v-for="id of filteredExternalModels" :id="id" :mgr="mgr" :external="true"/>
        </div>
        <input class="input" v-model="filter" type="text" placeholder="Filter..."
               @input="doFilter">
      </div>

      <div class="tool" @click="toggleAssets" style="margin-left: 0">
        <img src="../assets/icon/folder.svg" alt="Assets" draggable="false" v-if="!showAssets">
        <img src="../assets/icon/nav-arrow-down.svg" alt="Assets" draggable="false" v-else>
        <span class="tooltip">Assets</span>
      </div>

      <div class="tool" @click="promptUpload" v-if="showAssets">
        <img src="../assets/icon/import.svg" alt="Assets" draggable="false">
        <span class="tooltip">Upload Model...</span>
      </div>

      <div class="tool" @click="mgr.events.do('projects')">
        <img src="../assets/icon/view-grid.svg" alt="Projects" draggable="false">
        <span class="tooltip">Projects</span>
      </div>

      <div class="tool" @click="mgr.saveScene()">
        <img src="../assets/icon/floppy-disk.svg" alt="Save" draggable="false">
        <span class="tooltip">Save <span class="soft">[Ctrl+S]</span></span>
      </div>

    </div>
  </div>

</template>

<style scoped>

#upload-model {
  display: none;
}

#assets {
  position: absolute;

  bottom: calc(100% + 16px);
  left: -8px;

  display: flex;
  flex-direction: column;

  max-height: 40vh;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  padding: 8px;
  border-radius: 8px;
}

.assets-title {
  font-size: 18px;
  margin: 4px 0 8px 4px;
}

#assets-inner {
  overflow: scroll;
  display: flex;
  flex-direction: column;

  margin-bottom: 6px;
}

.input-parent {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;
}

.input-label {
  display: flex;
  align-items: center;

  margin: 0;

  text-align: left;
  font-weight: bold;

  flex: 1;
}

.input {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  padding: 8px 8px 8px 12px;

  font-size: 16px;
  text-align: left;

  width: 100%;
  box-sizing: border-box;
}

.input:hover, .input:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.input:focus {
  color: rgba(255, 255, 255, 0.8);
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

#files {
  position: absolute;
  bottom: 12px;
  left: 12px;

  flex-direction: row;
  overflow: visible;

  user-select: none;
}

.tools-inner {
  flex-direction: row;
  margin-top: 0;
  overflow: visible;

  display: flex;
  align-items: center;

  position: relative;
}

.external-label {
  margin: 8px;
  text-align: left;

  font-size: 15px;
  font-style: italic;
  opacity: 0.8;
}

.tools-icon {
  display: flex;
  align-items: center;

  position: relative;

  padding: 6px;
}

.drag-icon {
  background-color: rgba(255, 255, 255, 0.1);
  outline: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50em;
}

.section-header {
  display: flex;
  flex-direction: row;

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
  margin: 0 8px 0 8px;
}

.section-header-button {
  display: flex;
  align-items: center;

  border-radius: 4px;
  cursor: pointer;
}

.section-header-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  outline: 1px solid rgba(255, 255, 255, 0.5);
}

.section-header-button .section-header-icon {
  width: 24px;
}

.tool {
  position: relative;

  margin-left: 8px;

  padding: 6px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  overflow: visible;
}

.tool:hover {
  background-color: rgba(103, 103, 103, 0.15);
}

.tool img {
  filter: invert();

  width: 28px;
  display: flex;
  justify-content: center;
}

.tool .tooltip, .tools-icon .tooltip {
  display: none;

  width: auto;
  white-space: nowrap;

  background-color: rgba(37, 37, 37, 0.5);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;

  padding: 6px;
  border-radius: 8px;

  position: absolute;
  bottom: calc(100% + 16px);
  left: 50%;
  transform: translate(-50%);

  z-index: 1;
}

.tools-icon .tooltip {
  flex-direction: column;
}

.shortcuts {
  font-weight: bold;
  margin-bottom: 6px;
}

.soft {
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

.tool:hover .tooltip {
  display: inherit;
}

.tools-icon:hover .tooltip {
  display: flex;
}

.tool-spacing {
  margin-left: 12px;
  margin-right: 4px;

  width: 1px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.5);
}

#line-menu {
  position: absolute;
  bottom: 75px;
  height: auto;
  width: 393px;
  left: 50%;
  transform: translate(-50%);
  flex-direction: column;
}

#exit-button {
  position: relative;
  left: 80%;
}

#draw-line-button {
  position: relative;
  align-self: flex-end;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 1%;
}

p{
  vertical-align: baseline;
  font-size: 20px;
}

#line-title {
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 20px;
}

</style>

<script>

import SceneManager from "../scene/scene_manager.js";

export default {
  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },

  data() {
    return {
      models: [],
      externalModels: [],
      showAssets: false,
      filter: "",
      filteredModels: [],
      filteredExternalModels: []
    }
  },

  methods: {
    doFilter() {
      this.filteredModels = this.models.filter(id => id.includes(this.filter)).sort();

      this.filteredExternalModels = this.externalModels.filter(id => {
        return id.includes(this.filter) && !this.models.includes(id);
      }).sort();
    },

    promptUpload() {
      this.$refs.modelUpload.click();
    },

    fileUploaded(event) {
      for (const file of event.target.files) {
        this.mgr.uploadModel(name, file, () => {
          this.loadExternalModels();
        });
      }
    },

    loadExternalModels() {
      fetch("http://localhost:9000/Get_All_Models", {
        method: "POST"
      }).then(response => {
        return response.json();
      }).then(data => {
        this.externalModels = data.map(val => val.replaceAll(".glb", ""));
        this.doFilter();
      });
    },

    toggleAssets() {
      this.showAssets = !this.showAssets;

      if (this.showAssets)
        this.loadExternalModels();
    }
  },

  created() {
    this.mgr.events.on("load_models", () => {
      this.models = this.mgr.getModelIDs();
      this.doFilter();
    });

    this.loadExternalModels();
  }
};

</script>
<script setup>
  import PointPosition from "./info/PointPosition.vue";
</script>


<template>
  <div class="section" id="files">
    <div class="tools-icon" v-if="!dragMode">
      <img class="section-header-icon" id="tools-icon" src="../assets/icon/wrench.svg" alt="Wrench" draggable="false">
      <span class="tooltip">

        <span class="shortcuts">More Shortcuts</span>

        <span>Select all - <span class="soft">Ctrl + A</span></span>
        <span>Invert selection - <span class="soft">Ctrl + I</span></span>

      </span>
    </div>
    <div class="tools-icon drag-icon" v-else>
      <img class="section-header-icon" id="tools-icon" src="../assets/icon/drag-hand-gesture.svg" alt="Wrench" draggable="false">
      <span class="tooltip">
        <span>Drag Mode - <span class="soft">Release [E] to cancel</span></span>
      </span>
    </div>
    <div class="section-inner tools-inner">

      <div class="tool" @click="mgr.resetCamera()">
        <img src="../assets/icon/video-camera.svg" alt="Camera" draggable="false">
        <span class="tooltip">Reset Camera <span class="soft">[Ctrl+R]</span></span>
      </div>

      <div class="tool" @click="mgr.focusOnSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/eye.svg" alt="Eye" draggable="false">
        <span class="tooltip">Focus on Selection <span class="soft">[F]</span></span>
      </div>

      <div class="tool-spacing"></div>

      <div class="tool" @click="mgr.createNewObject()">
        <img src="../assets/icon/cube.svg" alt="Cube" draggable="false">
        <span class="tooltip">New Object <span class="soft">[R]</span></span>
      </div>

      <div class="tool" @click="mgr.clearSelection()" v-if="selected.length !== 0">
        <img src="../assets/icon/xmark.svg" alt="XMark" draggable="false">
        <span class="tooltip">Deselect <span class="soft">[Tab]</span></span>
      </div>

      <div class="tool" @click="mgr.duplicateSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/copy.svg" alt="Copy" draggable="false">
        <span class="tooltip">Duplicate <span class="soft">[Ctrl+D]</span></span>
      </div>

      <div class="tool" @click="mgr.deleteSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/trash.svg" alt="Trash" draggable="false">
        <span class="tooltip">Delete <span class="soft">[Del]</span></span>
      </div>

      <div class="tool-spacing"></div>

      <div class="tool" @click="ToggleLineWindow()">
        <img src="../assets/icon/ease-curve-control-points.svg" alt="Lines" draggable="false" v-if="!isLineMenuVisible">
        <img src="../assets/icon/nav-arrow-down.svg" alt="Assets" draggable="false" v-else>
        <span class="tooltip">New Line...</span>
      </div>

    </div>
  </div>

  <div class="section" id="line-menu" v-if="isLineMenuVisible">

        <div class="row row-top">
          <img src="../assets/icon/ease-curve-control-points.svg" alt="Lines">
          <p id="line-title">Create Line</p>
        </div>
        <div id="point-list">
          <div class="row" v-for="index in line.pointMap.keys()">
            <PointPosition :mgr="mgr" :line="line" :index="index"/>
          </div>
        <button id="add-point" @click="AddPoint()"><img src="../assets/icon/plus.svg" alt="Plus">Add Point</button>
        </div>
        <div class="row row-bottom">
          <div class="col">
            <p id="width-p">Width</p>
            <input class="width-input" v-model="width" type="text" placeholder=1
                  @input="doZ" v-on:keyup.enter="blurInput" style="margin-right: 0;">
          </div>
          <button id="draw-line-button" @click="line.drawLine(mgr, width); CloseLineMenu()">Draw Line<img src="../assets/icon/check.svg" alt="Check"></button>
        </div>

  </div>
</template>

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
}

#files {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%);

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
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 75px;
  height: auto;
  width: 393px;
  left: 50%;
  transform: translate(-50%);
}

#draw-line-button img {
  width: 1.5rem;
  margin-left: 8px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  box-sizing: border-box;

  padding: 8px;
}

.row-top img {
  filter: invert();
  width: 1.5rem;
}

.row-bottom {
  align-items: end;
}

#point-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

p {
  vertical-align: baseline;
  font-size: 20px;
}

#line-title {
  flex: 1;

  display: flex;

  margin: 0;
  margin-left: 6px;
  font-size: 20px;
}

#width-p {
  margin: 0 0 0 8px;
  text-align: left;
  font-size: 16px;
}

.width-input {
  width: 64px;

  font-size: 16px;

  outline: none;
  border: none;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  padding: 8px;

  text-align: center;
}

.width-input:hover, .width-input:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.width-input:focus {
  color: rgba(255, 255, 255, 0.8);
}

.width-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

button {
  display: flex;
  align-items: center;

  margin: 5% 1% 1% 1%;
  padding: 10px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  user-select: none;

  outline: none;
  border: none;
}

button:disabled {
  cursor: default;
}

button:hover:enabled {
  background-color: rgba(103, 103, 103, 0.15);
  outline: none;
  border: none;
}

button img {
  filter: invert();
}

#exit-button {
  display: flex;
  align-items: center;

  margin: 0;
  padding: 8px;
}

</style>

<script>
  import SceneManager from "../scene/scene_manager.js";
  import Line from "../scene/line.js";
  import { Vector3 } from "@orillusion/core";

  export default {
    props: {
      mgr: {
        type: SceneManager,
        required: true
      }
    },

    data() {
      return {
        selected: [],
        dragMode: false,

        isLineMenuVisible: false,
        pointIndex: 0,
        lineIndex: 0,
        width: 1,

        line: undefined
      }
    },

    methods : {
      ToggleLineWindow() {
        if (this.isLineMenuVisible)
          this.CloseLineMenu();
        else
          this.OpenLineWindow();
      },

      OpenLineWindow() {
        this.isLineMenuVisible = true;
        this.line = this.mgr.createLine();
        this.lineIndex++;
      }, 

      CloseLineMenu() {
        this.isLineMenuVisible = false;
      },

      // Makes this
      // <div class="row">
      //     <PointPosition :mgr="mgr" :index="pointIndex"/>
      //  </div>
      AddPoint(){
        this.line.addPoint(new Vector3(0,0,0));
        console.log(this.line.pointMap);
        this.pointIndex++;
      }
    },

    created() {
      this.mgr.events.on("select", sel => this.selected = [...sel]);
      this.mgr.events.on("drag", val => this.dragMode = val);
    }
  }
</script>
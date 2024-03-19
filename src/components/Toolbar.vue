<script setup>
  import PointPosition from "./info/PointPosition.vue";
</script>


<template>
  <div class="section" id="tools">
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
        <img src="../assets/icon/square3d-from-center.svg" alt="Plus" draggable="false">
        <span class="tooltip">Reset Camera <span class="soft">[Ctrl+R]</span></span>
      </div>

      <div class="tool" @click="mgr.focusOnSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/cube.svg" alt="Plus" draggable="false">
        <span class="tooltip">Focus on Selection <span class="soft">[F]</span></span>
      </div>

      <div class="tool-spacing"></div>

      <div class="tool" @click="mgr.createNewObject()">
        <img src="../assets/icon/plus.svg" alt="Plus" draggable="false">
        <span class="tooltip">New Object <span class="soft">[R]</span></span>
      </div>

      <div class="tool" @click="mgr.clearSelection()" v-if="selected.length !== 0">
        <img src="../assets/icon/xmark.svg" alt="Plus" draggable="false">
        <span class="tooltip">Deselect <span class="soft">[Tab]</span></span>
      </div>

      <div class="tool" @click="mgr.duplicateSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/copy.svg" alt="Plus" draggable="false">
        <span class="tooltip">Duplicate <span class="soft">[Ctrl+D]</span></span>
      </div>

      <div class="tool" @click="mgr.deleteSelected()" v-if="selected.length !== 0">
        <img src="../assets/icon/trash.svg" alt="Plus" draggable="false">
        <span class="tooltip">Delete <span class="soft">[Del]</span></span>
      </div>

      <div class="tool" @click="OpenLineWindow()">
        <img src="../assets/icon/plus.svg" alt="Plus" draggable="false">
        <span class="tooltip">New Line <span class="soft">[R]</span></span>
      </div>

    </div>
  </div>

  <div class="section" id="line-menu" v-if="isLineMenuVisible">

        <div class="row">
          <p id="line-title">Create Line</p>
          <button id="exit-button" @click="CloseLineMenu()">X</button>
        </div>
        <div id="point-list">
          <div class="row" v-for="index in line.pointMap.keys()">
            <PointPosition :mgr="mgr" :line="line" :index="index"/>
          </div>
        <button id="add-point" @click="AddPoint()">Add Point</button>
        </div>
        <!-- <div class="row">
          <p>Width</p>
          <input class="input-vector-comp c-z" v-model="width" type="text" placeholder="z"
                @input="doZ" v-on:keyup.enter="blurInput" style="margin-right: 0;" :disabled="!enableUpdate">
        </div> -->
          <button id="draw-line-button" @click="line.drawLine(lineIndex); CloseLineMenu()">Draw Line</button>

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

#tools {
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

        line: undefined
      }
    },

    methods : {
      OpenLineWindow(){
        this.isLineMenuVisible = true;
        this.line = new Line(this.mgr.view);
        this.lineIndex++;
      }, 

      CloseLineMenu(){
        this.isLineMenuVisible = false;
      },

      // Makes this
      // <div class="row">
      //     <PointPosition :mgr="mgr" :index="pointIndex"/>
      //  </div>
      AddPoint(){
        this.line.addPoint(new Vector3(0,0,0));
        console.log(this.line.pointMap);
        pointIndex++;
      }
    },

    created() {
      this.mgr.events.on("select", sel => this.selected = [...sel]);
      this.mgr.events.on("drag", val => this.dragMode = val);
    }
  }
</script>
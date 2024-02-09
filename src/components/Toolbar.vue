<template>
  <div class="section" id="tools">
    <img class="section-header-icon" id="tools-icon" src="../../icon/wrench.svg" alt="Wrench" draggable="false">
    <div class="section-inner" id="tools-inner">

      <div class="tool" @click="mgr.createNewObject()">
        <img src="../../icon/plus.svg" alt="Plus" draggable="false">
        <span class="tooltip">New Object <span class="soft">[R]</span></span>
      </div>

      <div class="tool" @click="mgr.clearSelection()">
        <img src="../../icon/xmark.svg" alt="Plus" draggable="false">
        <span class="tooltip">Deselect <span class="soft">[Tab]</span></span>
      </div>

      <div class="tool" @click="mgr.deleteSelected()">
        <img src="../../icon/trash.svg" alt="Plus" draggable="false">
        <span class="tooltip">Delete <span class="soft">[Del]</span></span>
      </div>

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

#tools {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%);

  flex-direction: row;
  overflow: visible;

  user-select: none;
}

#tools-inner {
  flex-direction: row;
  margin-top: 0;
  overflow: visible;
}

#tools-icon {
  padding-left: 6px;
  padding-right: 6px;
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

.tool .tooltip {
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

.tool .tooltip .soft {
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

.tool:hover .tooltip {
  display: inherit;
}

#canvas {
  display: block;
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
    }
  }
</script>
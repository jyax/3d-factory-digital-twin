<!-- Visual loading bar for when assets are being imported from the database and local storage. -->
<template>

  <transition name="fade">
    <div class="load-bar-parent" v-if="progress < 1">
      <div class="load-bar">
        <p>Loading Models... {{Math.floor(progress * 100)}}%</p>
        <div class="bar-parent">
          <div class="bar-fill" :style="getFill"></div>
        </div>
      </div>
    </div>
  </transition>

</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

.load-bar-parent {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}

.load-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  padding: 12px;
  border-radius: 6px;

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

.load-bar p {
  margin: 0 0 8px 0;
}

.bar-parent {
  height: 16px;

  background-color: rgba(255, 255, 255, 0.2);

  border-radius: 2px;
}

.bar-fill {
  height: 100%;

  border-radius: 2px;

  background-color: #75bb6e;

  transition: width 0.2s;
}

</style>

<script>

import SceneManager from "../scene/scene_manager.js";
import ColorGradient from "../color/color_gradient.js";
import {Color} from "@orillusion/core";

export default {
  name: "LoadBar",

  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },

  data() {
    return {
      listener: null,
      progress: 0,

      gradient: new ColorGradient()
    }
  },

  computed: {
    /**
     * Handle the width and color of the loading bar based on current progress.
     * @returns {string} CSS styling string
     */
    getFill() {
      const width = "width: " + (Math.floor(this.progress * 100)) + "%;";
      const c = this.gradient.get(this.progress);
      const colorString = "rgb(" + c.r * 255 + ", " + c.g * 255 + ", " + c.b * 255 + ")";
      const color = "background-color: " + colorString + ";";

      return width + color;
    }
  },

  created() {
    this.listener = this.mgr.events.on("load_models", progress => this.progress = progress);

    this.gradient.set(0.33, new Color(0.5, 0.5, 0.5));
    this.gradient.set(1, new Color(0.45, 0.93, 0.34));
  },

  destroyed() {
    if (this.listener !== null)
      this.mgr.events.remove(this.listener);
  }
};

</script>
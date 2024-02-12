<template>
  <div class="alert-menu-parent" v-if="visible">
    <div class="alert-menu">

      <div class="alert-header">

        <img class="alert-icon" src="../assets/icon/alert-icon.svg" alt="Alert Icon">
        <h1 class="alert-title">Alert</h1>

      </div>

      <div class="alert-main">

        <h3>Issue Detected at the following:</h3>
        <h3 class="desc" >{{ description }}</h3>

        <button @click="visible=false">Ok</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.alert-menu-parent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25%;
  width: 25%;
  max-width: 40%;
  max-height: 50%;
}

.alert-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 12px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;

  background-color: rgba(24, 24, 24, 0.67);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}
.object-info-text{
  text-align: left;
}
.alert-main {
  display: flex;
  flex-direction: column;
  padding: 2px;
}
.alert-header {
  display: flex;
  flex-direction: row;

  user-select: none;
}
.alert-title
{
  flex: 1;
  font-size: 24px;
  font-weight: normal;
  margin: 0 8px 0 8px;
}
.alert-icon {
  filter: invert();
  width: 24px;
}

button {
  background-color: rgba(140, 140, 140, 0.25);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  border: none;
  outline: none;
}

button:hover {
  background-color: rgba(114, 114, 114, 0.25);
}

</style>

<script>
import SceneManager from "../scene/scene_manager.js";

export default {
  data() {
    return {
      visible: false,
      description: ""
    }
  },

  props: {
    mgr: {
      type: SceneManager,
      required: true
    },
    desc: {
      default: 'Temperature above critical threshold.'
    }
  },

  created() {
    this.mgr.events.on("alert", s => {
      this.description = s;
      this.visible = true;
    });

    this.description = this.desc;
  }
}
</script>
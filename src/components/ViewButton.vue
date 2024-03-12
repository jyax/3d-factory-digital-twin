<template>
    <h2 id="button">Hello</h2>
</template>

<style>
    #button {
        height: 50px;
        width: 100px;
    }
</style>


<script>
    import SceneManager from "../scene/scene_manager.js";

  export default {
    name: "Pancake",

    props: {
      mgr: {
        type: SceneManager,
        required: true
      }
    },

    created() {
    }
  }
</script>
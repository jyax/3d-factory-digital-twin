
<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
    <Camera :position="{ x: 20, y: 0, z: 0 }" />
    <Scene>
      <AmbientLight></AmbientLight>
      <GltfModel src="../src/Models/Excavator.glb" />
    </Scene>
  </Renderer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
const rendererC = ref()
const meshC = ref()
onMounted(() => {
  const renderer = rendererC.value
  const mesh = meshC.value.mesh
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.01
  })
})
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>

<script>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
} from 'troisjs';

export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
};
</script>
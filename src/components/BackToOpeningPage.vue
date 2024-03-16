<script setup>

</script>

<template>

<div class="back-box" @click="$emit('back')">
  <img class="back-icon" src="../assets/icon/view-grid.svg" alt="Projects">
  <p class="back-text">
    Projects
  </p>
</div>

</template>

<style scoped>

.back-box {
  position: absolute;
  left: 12px;
  bottom: 12px;

  display: flex;
  flex-direction: row;

  padding: 6px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  overflow: visible;
}

.back-box:hover {
  background-color: rgba(23, 23, 23, 0.67);
}

.back-icon {
  filter: invert();
  opacity: 0.8;

  width: 28px;

  margin-right: 8px;
}

.back-text {
  color: white;
  font-weight: normal;
  font-size: 22px;

  margin: 0;
}

</style>
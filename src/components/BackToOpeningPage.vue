<script setup>

</script>

<template>
<div class="back-box" @click="$emit('back')">
  <h2 class="back-text">
    Back
  </h2>
</div>
</template>

<style scoped>
.back-box {
  width: 100px;
  height: 50px;
  background-color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 25%;
}

.back-text {
  color: white;
  font-weight: normal;
}

</style>
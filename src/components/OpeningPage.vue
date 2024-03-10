<script setup>
</script>

<template>
  <!-- Apply centering styles directly to the container -->
  <div class="container">
    <!-- Recently Opened -->
    <div class="box">
      <div class="box-content">
        <div class="item-container">
          <img src="../assets/icon/recent.svg" alt="Recent" draggable="false" class="icon">
          <h2>Recently Opened</h2>
        </div>
      </div>
      <!-- Add any additional content here -->
    </div>

    <!-- New -->
    <div class="box">
      <div class="box-content">
        <div class="item-container">
          <img src="../assets/icon/new-file.svg" alt="New" draggable="false" class="icon">
          <h2>New</h2>
        </div>
      </div>
      <!-- Add any additional content here -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw; /* Set width to viewport width */
  height: 100vh; /* Set height to viewport height */
}

.box {
  border: 1px solid #ccc;
  padding: 10px; /* Increase padding for bigger boxes */
  margin-right: 20px; /* Add margin to create space between boxes */
  width: 500px; /* Set width of boxes */
  height: 450px; /* Set height of boxes */
}

.box-content {
  display: flex;
  flex-direction: column; /* Set flex-direction to column */
  align-items: center; /* Align items vertically */
  justify-content: flex-start; /* Align items to the top */
}

.item-container {
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
}

.icon {
  width: 30px; /* Set the width of the icon */
  height: auto; /* Automatically adjust height to maintain aspect ratio */
  margin-right: 5px; /* Add margin between the icon and text */
}

/* Remove margin from the last box to prevent extra space */
.box:last-child {
  margin-right: 0;
}
</style>

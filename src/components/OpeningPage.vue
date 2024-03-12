<script setup>
</script>

<template>
  <div class="container">
    <!-- Recently Opened -->
    <div class="outside-box">
      <div class="box-content">
        <div class="item-container">
          <img src="../assets/icon/recent.svg" alt="Recent" draggable="false" class="icon" style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"/>
          <div class="default-text">
            <h2>
              Recently Opened
            </h2>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Factory 1
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Factory 2
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Factory 3
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Factory 4
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Factory 5
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New -->
    <div class="outside-box">
      <div class="new-name-container">
        <div class="box-content">
          <div class="item-container">
            <img src="../assets/icon/new-file.svg" alt="New" draggable="false" class="icon">
            <div class="default-text">
              <h2>
                New
              </h2>
            </div>
          </div>
        </div>
        <!-- Name -->
        <div class="container-with-name">
          <div class="name-box">
            <div class="box-content">
              <h2 class="name-create-text">
                Name...
              </h2>
            </div>
          </div>
        </div>
        <div class="drag-drop-container">
          <div class="drag-drop-box">
            <img src="../assets/icon/drag-drop.svg" alt="Arrow" draggable="false" class="icon">
            <h2 class="drag-drop-text">
              Click here or drag and drop a factory JSON file to upload.
            </h2>
          </div>
        </div>
        <div class="create-box">
          <h2 class="name-create-text">
            Create
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-green {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

.outside-box {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px; /* Increase padding for bigger boxes */
  margin-right: 20px; /* Add margin to create space between boxes */
  width: 500px; /* Set width of boxes */
  height: 450px; /* Set height of boxes */
  align-items: center;
  justify-content: center;
  text-align: center;
}

.name-box {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px; /* Adjust padding for smaller box */
  margin-top: 10px; /* Add margin to create space between boxes */
  width: 300px; /* Set smaller width of the box */
  height: 40px; /* Set smaller height of the box */
  text-align: start; /* Align text horizontally */
  display: flex; /* Add display flex */
  align-items: center; /* Align items vertically */
}

.drag-drop-box {
  display: flex;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 5px; /* Increase padding for bigger boxes */
  margin-top: 20px; /* Add margin to create space between boxes */
  width: 300px; /* Set width of boxes */
  height: 150px; /* Set height of boxes */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  flex-direction: column;
}

.create-box {
  display: flex;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px; /* Increase padding for bigger boxes */
  margin-top: 20px; /* Add margin to create space between boxes */
  width: 80px; /* Set width of boxes */
  height: 30px; /* Set height of boxes */
  align-items: center; /* Center horizontally */
  text-align: start; /* Align text horizontally */
}

.box-content {
  display: flex;
  flex-direction: column; /* Set flex-direction to column */
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items to the top */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw; /* Set width to viewport width */
  height: 100vh; /* Set height to viewport height */
  background-color: #888888; /* Set grey background color */
}

.container-with-name {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start; /* Align items horizontally */
}

.item-container {
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
}

.new-name-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Align items horizontally */
  justify-content: center; /* Align items vertically */
}

.drag-drop-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 30px; /* Set the width of the icon */
  height: auto; /* Automatically adjust height to maintain aspect ratio */
  margin-right: 5px; /* Add margin between the icon and text */
  color: white !important;
}

/* Remove margin from the last box to prevent extra space */
.outside-box:last-child {
  margin-right: 0;
}

.drag-drop-text {
  font-size: 14px; /* Set the font size to smaller */
  font-weight: normal;
  color: white;
}

.name-create-text {
  font-weight: normal;
  color: white;
  margin-left: 5px;
}

.default-text {
  color: white;
}
</style>


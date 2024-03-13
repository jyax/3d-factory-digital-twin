<script setup>
import { ref } from 'vue';

const fileName = ref('');
const isDraggingOver = ref(false);
const isEditing = ref(false);
const editedName = ref('');

const HandleDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  fileName.value = file.name;
  isDraggingOver.value = false;
};

const HandleDragOver = (event) => {
  event.preventDefault();
  isDraggingOver.value = true;
};

const ClearFileName = () => {
  fileName.value = '';
  isDraggingOver.value = false;
};

const StartEditing = () => {
  isEditing.value = true;
  editedName.value = ''; // Clear previously edited name if any
  focusInput(); // Focus the input field when editing starts
};

const FinishEditing = () => {
  isEditing.value = false;
}

const HandleNameBoxClick = () => {
  StartEditing();
}
</script>

<template>
  <div class="container">
    <!-- Recently Opened -->
    <div class="outside-box">
      <div class="box-content">
        <div class="item-container">
          <img src="../assets/icon/recent.svg" alt="Recent" draggable="false" class="icon" style="filter:
          invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"/>
          <div class="default-text">
            <h2>
              Recently Opened
            </h2>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                Factory 1
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                Factory 2
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                Factory 3
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                Factory 4
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
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
        <div class="name-box" @click="HandleNameBoxClick">
          <input v-if="!isEditing" type="text" class="name-text" value="Name..." :readonly="!isEditing">
          <input v-else v-model="editedName" type="text" class="name-text" @blur="FinishEditing">
        </div>
        <!-- Drag and Drop -->
        <div class="drag-drop-container">
          <div v-if="!fileName" class="drag-drop-box" @drop="HandleDrop" @dragover="HandleDragOver">
            <img src="../assets/icon/drag-drop.svg" alt="Arrow" draggable="false" class="icon">
            <h2 class="drag-drop-text">
              Click here or drag and drop a factory JSON file to upload.
            </h2>
          </div>
          <div v-else class="filename-container">
            <h2 class="filename-text">
              {{ fileName }}
            </h2>
            <!-- X icon -->
            <img @click="ClearFileName" src="../assets/icon/xmark.svg" alt="X" draggable="false" class="icon" style="filter:
            invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"/>
          </div>
        </div>
        <!-- Create -->
        <div class="create-box">
          <h2 class="factory-create-text">
            Create
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outside-box {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 20px;
  width: 500px;
  height: 450px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.name-box {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  width: 300px;
  height: 40px;
  text-align: start;
  display: flex;
  align-items: center;
}

.drag-drop-box {
  display: flex;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  width: 300px;
  height: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.create-box {
  display: flex;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  width: 80px;
  height: 30px;
  align-items: center;
  text-align: start;
}

.box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #666666;
}

.container-with-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.new-name-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.drag-drop-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.filename-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.icon {
  width: 30px;
  height: auto;
  margin-right: 5px;
}

.outside-box:last-child {
  margin-right: 0;
}

.drag-drop-text {
  font-size: 14px;
  font-weight: normal;
  color: white;
}

.name-text {
  font-weight: normal;
  color: white;
  background-color: transparent;
  font-size: 22px;
  border: none;
  width: 100%;
  height: 100%;
}

.name-box input {
  font-weight: normal;
  color: white;
  background-color: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.factory-create-text {
  font-weight: normal;
  color: white;
  margin-left: 5px;
}

.default-text {
  color: white;
}

.filename-text {
  font-size: 18px;
  text-decoration: underline;
  color: white;
}
</style>


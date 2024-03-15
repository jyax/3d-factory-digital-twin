<script setup>
import { ref } from 'vue';
//import { defineEmits } from 'vue';
import SceneManager from '../scene/scene_manager.js';

const fileInput = ref('');
const isDraggingOver = ref(false);
const isEditing = ref(false);
const editedName = ref('');
const isEmpty = ref(true);
const emit = defineEmits(['create']);

// recent files
const recentList = [
  'Factory 1',
  'Factory 2',
  'Factory 3',
  'Factory 4',
  'Factory 5',
];

/**
 * Get file name when a file is dropped
 * @param event Drop event
 * @constructor
 */
const Drop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  fileInput.value = file.name;
  isDraggingOver.value = false;
};

/**
 * Set isDraggingOver to true when user drags a file over drag-drop-box
 * @param event Drag over event
 * @constructor
 */
const DragOver = (event) => {
  event.preventDefault();
  isDraggingOver.value = true;
};

/**
 * Clear file name when user chooses to cancel their file
 * @constructor
 */
const ClearFile = () => {
  fileInput.value = '';
  isDraggingOver.value = false;
};

/**
 * Starting editing the file name
 * @constructor
 */
const StartEditing = () => {
  isEditing.value = true;
};

/**
 * Finish editing the file name
 * @constructor
 */
const FinishEditing = () => {
  isEditing.value = false;
  isEmpty.value = editedName.value.trim() === '';
}

/**
 * Open file explorer when user clicks drag-drop-box
 * @constructor
 */
const OpenFileExplorer = () => {
  const input = document.querySelector('.drag-drop-box input[type="file"]');
  input.click();
}

/**
 * Change file name when user selects it in file explorer
 * @param event
 * @constructor
 */
const FileChange = (event) => {
  const file = event.target.files[0];
  fileInput.value = file.name;
}

/**
 * Add the file they create to recent list
 * @constructor
 */
const Create = () => {
  console.log(fileInput.value);
  recentList.unshift(fileInput.value);
  console.log(recentList);
  emit('create');
  console.log("create called");
}

/**
 * Load scene
 * @constructor
 */
const Load = () => {
  if (fileInput.value !== '') {
    // const sceneManager = new SceneManager();
    // console.log(document.getElementById('fileInput'));
    // try {
    //   document.getElementById('fileInput').addEventListener('drop', (event) => {
    //     event.preventDefault()
    //     let file = event.dataTransfer.files[0]
    //
    //     if (file.type.match('application/json')) {
    //       let reader = new FileReader()
    //       reader.onloadend = (event) => {
    //         let jsonString = JSON.parse(String(event.target.result));
    //         sceneManager.LoadScene(jsonString)
    //       }
    //       reader.readAsText()
    //     }
    //     else {
    //       console.log("please use a valid JSON file")
    //     }
    //     //this.LoadScene()
    //   })
    // }
    // catch {
    //   console.log("error getting file input");
    // }
  }
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
                {{ recentList[0] }}
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                {{ recentList[1] }}
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                {{ recentList[2] }}
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                {{ recentList[3] }}
              </h2>
            </div>
          </div>
        </div>
        <div class="recent-box-1">
          <div class="name-box">
            <div class="box-content">
              <h2 class="factory-create-text">
                {{ recentList[4] }}
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
        <div class="name-box" @click="StartEditing">
          <input v-if="!isEditing && isEmpty" type="text" class="name-text" value="Name..." :readonly="!isEditing">
          <input v-else v-model="editedName" type="text" class="name-text" @blur="FinishEditing">
        </div>
        <!-- Drag and Drop -->
        <div class="drag-drop-container">
          <div v-if="!fileInput" class="drag-drop-box" @click="OpenFileExplorer" @drop="Drop" @dragover="DragOver" @change="FileChange" id="fileInput">
            <input type="file" id="fileInput" style="display: none;" />
            <img src="../assets/icon/drag-drop.svg" alt="Arrow" draggable="false" class="icon">
            <h2 class="drag-drop-text" id="fileInput">
              Click here or drag and drop a factory JSON file to upload.
            </h2>
          </div>
          <div v-else class="filename-container">
            <h2 class="filename-text">
              {{ fileInput }}
            </h2>
            <!-- X icon -->
            <img @click="ClearFile" src="../assets/icon/xmark.svg" alt="X" draggable="false" class="icon" style="filter:
            invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"/>
          </div>
        </div>
        <!-- Create -->
        <div class="create-box" @click="Create">
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


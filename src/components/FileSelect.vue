<!-- Start menu allowing for a file to be loaded locally or from the database -->
<template>
    <div class="overlay">

      <div id="file-select">
        <div class="panel" id="left-panel">
          <div class="panel-header">
            <img src="../assets/icon/perspective-view.svg" alt="Floor" draggable="false">
            <h2>Factory Floors</h2>
          </div>
          <div id="files" v-for="file in allFloors">
            <FileListing class="item" :fileName="file.replaceAll('.json', '')" @click="loadFile(file); displayProject();" v-if="file!=''"/>
          </div>
        </div>

        <div class="panel" id="right-panel">
          <div class="panel-header">
            <img src="../assets/icon/plus.svg" alt="Plus" draggable="false">
            <h2>New</h2>
          </div>
          <input class="file-name-input" type="text" placeholder="Name..." v-model="newFileName"/>
          <div :class="dragClass" id="file-drop" @dragover.prevent @drop.prevent @drop="dropHandler"
               @dragover="fileOver = true" @dragleave="fileOver = false">
            <p class="center">Drag and drop a factory floor JSON file to upload.</p>
          </div>
          <button id="create-button" @click="mgr.loadScene(newFileName, null); displayProject();"
                  :disabled="newFileName.trim().length === 0 || allFloors.includes(newFileName + '.json')">Create</button>
        </div>
      </div>

    </div>
</template>

<style scoped>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(115, 113, 113, 1);
  z-index: 1;
  display: flex;
  flex-direction: row;
}

#file-select {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
}

.panel {
  height: 60vh;
  position: relative;
  background-color: rgba(24, 24, 24, 0.67);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  margin: 10% 0 10% 0;
  top:10%;
  border-radius: 8px;
}

#left-panel {
  margin-left: 20%;
  margin-right: 2vw;

  width: 30vw;
}

#right-panel {
  margin-right: 20%;

  width: 50vw;
}

.panel-header {
  display: flex;
  flex-direction: row;

  justify-content: center;

  user-select: none;
}

.panel-header img {
  width: 2.5rem;
  filter: invert();
}

#left-panel .panel-header img {
  width: 2rem;
  margin-right: 8px;
}

.file-name-input {
  width: 50%;
  height: 30px;
  margin: 0 auto 0 auto;
  font-size: 20px;

  outline: none;
  border: none;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  padding: 8px;

  text-align: center;
}

.file-name-input:hover, .file-name-input:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.file-name-input:focus {
  color: rgba(255, 255, 255, 0.8);
}

.file-name-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

#file-drop {
  background-color: rgba(140, 140, 140, 0.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  height: 50%;
  width: 80%;
  margin: 5% auto 0 auto;
  border-radius: 16px;
  border: 2px dashed rgb(118, 118, 118);
  display: flex;
  justify-content: center; /* Align horizontal */
  align-items: center; /* Align vertical */

  user-select: none;
}

.file-over {
  outline: 2px solid #64a5c7 !important;
  background-color: #3c4750 !important;
  box-shadow: inset 0 0 32px #64a5c7 !important;
}

.center {
  opacity: 0.8;
  font-style: italic;
}

p {
  margin: 1%;
}

.item {
  margin: 3%;
}

#create-button {
  margin: 5% 1% 1% 1%;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  user-select: none;

  outline: none;
  border: none;
}

#create-button:disabled {
  cursor: default;
}

#create-button:hover:enabled {
  background-color: rgba(103, 103, 103, 0.15);
  outline: none;
  border: none;
}

</style>


<script>
import SceneManager from "../scene/scene_manager.js";
import FileListing from "./FileListing.vue";
export default{

  components: {
    FileListing 
  },

  props: {
    mgr: {
      type: SceneManager,
      required: true
    }
  },

  data () {
    return {
      newFileName: "",
      savedFiles: [],

      leftTab: "all",
      allFloors: [],

      fileOver: false
    }
  },

  computed: {
    dragClass() {
      if (this.fileOver)
        return "file-over";

      return "";
    }
  },

  methods: {

    // When file is dropped into input div load the file into a scene
    dropHandler(ev) {
      // prevent default actions
      ev.preventDefault();

      // Check if there are files
      if(ev.dataTransfer.files) {
        const file = ev.dataTransfer.files[0];

        // Ensure it is a JSON
        if (file.type === "application/json") {
          const fr = new FileReader();

          // Parse the JSON into a string, load the file, and disable start menu to show the scene
          fr.onloadend = (event) => {
            const data = JSON.parse(String(fr.result));
            this.mgr.loadScene(file.name, data);
            this.displayProject();
          }
          fr.readAsText(ev.dataTransfer.files[0]);
        } else { this.mgr.alert("File is either corrupted or is not JSON") }
      }
      else {
        console.error("File Reading");
      }
    },


    // Call event to disable start menu and show scene
    displayProject() {
      this.mgr.events.do('open project');
    },

    // Loads the scene from the database
    loadFile(fileName) {
      this.mgr.getSceneFromDB(fileName);
    },

    loadAllFloors() {
      fetch("http://localhost:9000/Get_All_Floors", {
        method: "POST"
      }).then(response => {
        return response.json();
      }).then(data => {
        this.allFloors = data;
      });
    }
  },

  created() {

    this.loadAllFloors();
  }
}
</script>
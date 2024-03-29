<template>
    <div class="overlay">
      <div class="panel" id="left-panel">
        <h2>Past Files</h2>
        <div id="files" v-for="file in savedFiles">
        <FileListing class="item" :fileName=file @click="loadFile(file)"/>
        </div>
      </div>
      <div class="panel" id="right-panel">
        <h2>New</h2>
        <input class="file-name-input" type="text" placeholder="Name..." v-model="newFileName"/>
        <div id="file-drop" @dragover.prevent @drop.prevent @drop="dropHandler" @dragover="dragOverHandler">
          <p class="center">Click here or drag an drop a factory JSON file to upload</p>
        </div>
        <button id="create-button" @click="mgr.LoadScene({}); displayProject();">Create</button>
      </div>
    </div>
</template>

<style>

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(115, 113, 113, 1);
  top: 0px;
  z-index: 1;
  display: flex;
  flex-direction: row;
}

.panel {
    width: 30%;
    height: 60%;
    position: relative;
    background-color: rgba(24, 24, 24, 0.67);
    backdrop-filter: blur(8px);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    margin: 10% 0 10% 0;
    top:10%;
    border-radius: 5%;
}

#left-panel {
    margin-left: 20%;
    margin-right: 2%;
}

#right-panel {
    margin-left: 2%;
    margin-right: 20%;
}

.file-name-input {
  width: 80%;
  height: 30px;
  margin: 0 auto 0 auto;
  font-size: 20px;
}

#file-drop {
  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  height: 50%;
  width: 80%;
  margin: 8% auto 0 auto;
  border-radius: 5%;
  border-color: rgb(118, 118, 118);
  border-style: dashed;
  display: flex;
  justify-content: center; /* Align horizontal */
  align-items: center; /* Align vertical */
}

p {
  margin: 1%;
}

.item {
  margin: 3%;
}

#create-button {
  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  margin: 5% 1% 1% 1%
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
      savedFiles: []
    }
  },

  methods: {
    dropHandler(ev) {
      // prevent default actions
      ev.preventDefault();

      if(ev.dataTransfer.files) {
        const fr = new FileReader();
        console.log(typeof(ev.dataTransfer.files[0]));
        fr.readAsText(ev.dataTransfer.files[0]);

        fr.addEventListener('load', () => {
          const data = fr.result;
          console.log("file contents: ", fr.result);
          this.newFileName = file.name;
          // this.mgr.LoadScene(file.name, data);
          this.displayProject();
        });
      }
      else {
        console.error("File Reading");
      }
    },

    dragOverHandler(ev) {
        console.log("over");
    },

    displayProject() {
      this.mgr.events.do('open project');
      console.log(this.newFileName);
    },

    loadFile(fileName){

      let json = JSON.parse(localStorage.getItem(fileName));
      this.mgr.LoadScene(fileName, json);
    }
  },

  created() {
    this.savedFiles = ['test_scene_1', 'test_scene_2'];
  }
}
</script>
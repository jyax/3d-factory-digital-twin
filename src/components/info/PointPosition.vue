<template>
    <div class="input-vector">
        
        <p class="input-label">{{index}}</p>
  
        <input class="input-vector-comp c-x" v-model="xVal" type="text" placeholder="x"
                @input="doX" v-on:keyup.enter="blurInput" :disabled="!enableUpdate">
    
        <input class="input-vector-comp c-y" v-model="yVal" type="text" placeholder="y"
                @input="doY" v-on:keyup.enter="blurInput" :disabled="!enableUpdate">
    
        <input class="input-vector-comp c-z" v-model="zVal" type="text" placeholder="z"
                @input="doZ" v-on:keyup.enter="blurInput" style="margin-right: 0;" :disabled="!enableUpdate">
  
    </div>
  </template>
  
  <style scoped>

  .input-vector {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 0 16px;

    width: 100%;
  }
  
  .input-label {
    flex: 0;
    margin-right: 8px;
    font-weight: bold;
  }
  
  .input-vector {
    border-radius: 4px;
  
    display: flex;
    flex-direction: row;
  }
  
  .input-vector-comp {
    flex: 1;
  
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  
    color: rgba(255, 255, 255, 0.8);
  
    outline: none;
    border: none;
  
    padding: 8px;
  
    font-size: 16px;
  
    margin: 0 5px 0 5px;
  
    width: 60px;
  }
  
  .c-x {
    color: #d77373;
  }
  
  .c-y {
    color: #75bb6e;
  }
  
  .c-z {
    color: #7276d7;
  }
  
  .input-vector-comp:hover, .input-vector-comp:focus {
    background-color: rgba(0, 0, 0, 0.25);
  }
  
  .input-vector-comp:focus {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .input-vector-comp::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  </style>
  
  <script>
  import SceneManager from "../../scene/scene_manager.js";
  import Line from "../../scene/line.js";
  import {Vector3} from "@orillusion/core";
  
  export default {
    name: "PointPosition",
  
    props: {
      mgr: {
        type: SceneManager,
        required: true
      },

      line: {
        type: Line,
        required: true
      },

      index: {
        type: Number,
        required: true
      }
    },
  
    data() {
      return {
        pos: new Vector3(),
  
        xVal: 0,
        yVal: 0,
        zVal: 0,
  
        enableUpdate: true
      }
    },
  
    methods: {
      doX() {
        if(this.enableUpdate && !(this.xVal.trim() == '')){
            var oldVector = this.line.pointMap.get(this.index);
            oldVector.x = Number(this.xVal);
            this.line.updateLine(this.index, oldVector);
        }
      },
  
      doY() {
        if(this.enableUpdate && !(this.yVal.trim() == '')){
            var oldVector = this.line.pointMap.get(this.index);
            oldVector.y = Number(this.yVal);
            this.line.updateLine(this.index, oldVector);
        }
      },
  
      doZ() {
        if(this.enableUpdate && !(this.zVal.trim() == '')){
            var oldVector = this.line.pointMap.get(this.index);
            oldVector.z = Number(this.zVal);
            this.line.updateLine(this.index, oldVector);
        }
      },
  
      blurInput(e) {
        e.target.blur();
      },
  
      update(selected) {
        if(this.enableUpdate){
          if (selected.length !== 1)
            this.pos = new Vector3();
          else
            this.pos = selected[0].getObject3D().localPosition;
  
          this.xVal = Math.floor(this.pos.x * 100) / 100;
          this.yVal = Math.floor(this.pos.y * 100) / 100;
          this.zVal = Math.floor(this.pos.z * 100) / 100;
        }
      },
  
      switchView() {
          this.enableUpdate = !(this.enableUpdate);
          console.log("switch", this.enableUpdate);
      }
    },  
  
    created() {
    //   this.mgr.events.on("select", selected => this.update(selected));
    //   this.mgr.events.on('switch view', this.switchView);
  
    //   this.update(this.mgr.getSelected());
    }
  }
  </script>
<template>

  <div class="model-parent">
    <p class="label">{{label}}</p>

    <select class="dropdown" v-model="current" @change="doChange()">
      <option v-for="id of optionList" :value="id.toLowerCase()">{{id}}</option>
    </select>
  </div>

</template>

<style scoped>

.model-parent {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;
}

.label {
  display: flex;
  align-items: center;

  flex: 1;
  margin: 0;

  text-align: left;
  font-weight: bold;
  user-select: none;
}

.dropdown {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  padding: 8px;

  font-size: 16px;

  cursor: pointer;
}

.dropdown:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

option {
  background-color: rgb(59, 59, 59);
}

</style>

<script>

export default {
  props: {
    label: {
      default: "Dropdown"
    },

    options: {
      type: Array,
      default: []
    },

    default: {
      default: ""
    },

    onChange: {
      default: val => {}
    }
  },

  data() {
    return {
      optionList: [],
      current: ""
    }
  },

  methods: {
    doChange() {
      this.onChange(this.current);
    }
  },

  created() {
    this.current = this.default;
    this.optionList = [...this.options];
  }
}

</script>
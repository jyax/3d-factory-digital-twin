<!-- Generalized text input component. -->

<template>

  <div class="input-parent">
    <p class="input-label">{{label}}</p>

    <input class="input" v-model="val" type="text" :placeholder="placeholder"
           @input="doChange" @focus="$emit('focus')" @blur="$emit('blur')" v-on:keyup.enter="blurInput" :disabled="!enableUpdate">
  </div>

</template>

<style>

.input-parent {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;
}

.input-label {
  display: flex;
  align-items: center;

  margin: 0;

  text-align: left;
  font-weight: bold;

  flex: 1;
}

.input {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: rgba(255, 255, 255, 0.8);

  outline: none;
  border: none;

  padding: 8px;

  font-size: 16px;
  text-align: center;

  width: 128px;
}

.input:hover, .input:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

.input:focus {
  color: rgba(255, 255, 255, 0.8);
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

</style>

<script>

export default {
  name: "ObjectInfoInput",

  props: {
    default: {
      default: ""
    },

    onChange: {
      default: value => {}
    },

    label: {
      default: "Field"
    },

    placeholder: {
      default: "Optional"
    }
  },

  data() {
    return {
      val: "",

      enableUpdate: true
    }
  },

  methods: {
    /**
     * Focus out of the text input box.
     * @param e Event
     */
    blurInput(e) {
      e.target.blur();
    },

    /**
     * Handle the changing of the value of the text input.
     */
    doChange() {
      this.onChange(this.val);
    },

    /**
     * Handle the toggling between view and edit mode.
     */
    switchView() {
        this.enableUpdate = !(this.enableUpdate);
    }
  },

  created() {
    this.val = this.default;
  }
}

</script>
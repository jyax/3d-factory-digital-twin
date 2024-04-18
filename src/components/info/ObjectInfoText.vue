<!-- Generalized component to display an attribute of an object and its value. -->
<template>
  <div class="object-info-text">
    <p class="oit-left">{{name}}</p>
    <p class="oit-right">{{value}}</p>
  </div>
</template>

<style scoped>

.object-info-text {
  display: flex;
  flex-direction: row;

  margin: 0 0 8px;
}

.object-info-text p {
  flex: 1;

  margin: 0;
}

.object-info-text .oit-left {
  font-weight: bold;
  text-align: left;

  user-select: none;
}

.object-info-text .oit-right {
  text-align: right;

  cursor: text;
}

</style>

<script>
export default {
  name: "ObjectInfoText",

  props: {
    name: {
      default: ""
    },
    value: {
      default: ""
    }
  }
}
</script>
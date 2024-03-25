<template>

  <div class="subscriber">
    <p>{{label}}</p>
    <img src="../../../../assets/icon/plus.svg" alt="Add">
  </div>

</template>

<style scoped>

.subscriber {
  display: flex;
  flex-direction: row;

  padding: 8px 8px 8px 12px;
  margin-bottom: 8px;

  border-radius: 4px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  cursor: pointer;
}

.subscriber:hover {
  background-color: rgba(100, 100, 100, 0.15);
}

.subscriber p {
  flex: 1;

  margin: 0;

  color: #cccccc;
  text-align: left;
}

.subscriber img {
  filter: invert();
}

</style>

<script>

export default {
  props: {
    label: {
      default: "Subscriber"
    }
  }
};

</script>
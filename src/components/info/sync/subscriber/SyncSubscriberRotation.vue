<template>

</template>

<style scoped>

</style>

<script>

import Subscriber from "../../../../scene/subscriber.js";

export default {
  name: "SyncSubscriberRotation",

  props: {
    subscriber: {
      type: Subscriber,
      required: true
    }
  }
};

</script>
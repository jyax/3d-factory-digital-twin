<!-- Displays information about a position subscriber. -->
<template></template>

<style scoped>

</style>

<script>

import Subscriber from "../../../../scene/subscriber.js";

export default {
  name: "SyncSubscriberPosition",

  props: {
    subscriber: {
      type: Subscriber,
      required: true
    }
  }
};

</script>
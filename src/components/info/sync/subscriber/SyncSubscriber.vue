<template>

  <div class="subscriber" :class="dynamicClass" @click="() => { if (collapsed) collapsed = false; }">
    <div class="subscriber-header">
      <p>{{label}}</p>
      <!--<img src="../../../../assets/icon/trash.svg" class="collapse delete" alt="Delete">-->
      <img src="../../../../assets/icon/nav-arrow-down.svg" alt="Expand" v-show="collapsed">
      <img src="../../../../assets/icon/nav-arrow-up.svg" class="collapse" alt="Collapse" v-show="!collapsed" @click.stop="collapsed = true">
    </div>

    <div class="subscriber-inner" v-show="!collapsed">

      <sync-subscriber-position :subscriber="subscriber" v-if="subscriber instanceof SubscriberPosition"/>
      <sync-subscriber-rotation :subscriber="subscriber" v-if="subscriber instanceof SubscriberRotation"/>
      <sync-subscriber-single-value :subscriber="subscriber" v-if="subscriber instanceof SubscriberSingleValue"/>

      <p class="hint">{{lastUpdate}}</p>

    </div>
  </div>

</template>

<style scoped>

.subscriber {
  display: flex;
  flex-direction: column;

  padding: 4px;
  margin-bottom: 8px;

  border-radius: 4px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.subscriber-header {
  display: flex;
  flex-direction: row;

  padding: 4px 4px 4px 8px;
}

.subscriber-inner {
  margin-top: 4px;

  padding: 8px;

  border-radius: 2px;

  background-color: rgba(0, 0, 0, 0.1);
}

.hoverable {
  cursor: pointer;
}

.hoverable:hover {
  background-color: rgba(100, 100, 100, 0.15);
}

.subscriber-header p {
  flex: 1;

  margin: 0;

  color: #cccccc;
  text-align: left;
}

.subscriber-header img {
  width: 24px;

  filter: invert();

  display: flex;
  align-items: center;
}

.collapse {
  cursor: pointer;
}

.collapse:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

.collapse.delete {
  margin-right: 4px;
  padding: 4px;

  width: 18px;
}

.hint {
  margin: 0;

  text-align: center;
  font-size: 12px;
  font-style: italic;

  color: #a2a2a2;
}

</style>

<script>

import Subscriber from "../../../../scene/subscriber.js";
import SyncSubscriberPosition from "./SyncSubscriberPosition.vue";
import SubscriberPosition from "../../../../scene/subscriber_position.js";
import SyncSubscriberSingleValue from "./SyncSubscriberSingleValue.vue";
import SubscriberSingleValue from "../../../../scene/subscriber_single_value.js";
import SubscriberRotation from "../../../../scene/subscriber_rotation.js";
import SyncSubscriberRotation from "./SyncSubscriberRotation.vue";

export default {
  components: {SyncSubscriberRotation, SyncSubscriberSingleValue, SyncSubscriberPosition},
  props: {
    label: {
      default: "Subscriber"
    },
    subscriber: {
      type: Subscriber,
      required: true
    }
  },

  data() {
    return {
      collapsed: true,
      lastUpdate: "",

      updateListener: null
    };
  },

  methods: {
    update() {
      this.lastUpdate = this.subscriber.getLastReceivedString();
    }
  },

  computed: {
    SubscriberSingleValue() {
      return SubscriberSingleValue
    },
    SubscriberPosition() {
      return SubscriberPosition
    },
    SubscriberRotation() {
      return SubscriberRotation
    },
    dynamicClass() {
      if (this.collapsed)
        return "hoverable";

      return "";
    }
  },

  created() {
    this.updateListener = this.subscriber.events.on("update", () => this.update());

    this.update();
  },

  destroyed() {
    this.subscriber.events.remove(this.updateListener);
  }
};

</script>
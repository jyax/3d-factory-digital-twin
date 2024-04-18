<script setup>
import ObjectInfoID from "../ObjectInfoID.vue";
import SyncSubscriberAdd from "./subscriber/SyncSubscriberAdd.vue";
import SyncSubscriber from "./subscriber/SyncSubscriber.vue";
</script>

<!-- Root component for displaying information about all subscribers attached to a SceneObject. -->
<template>

  <div class="section-inner">

    <object-info-i-d :object="object" label="ID" placeholder="Optional"/>
    <p class="hint">Objects will not receive live data without an ID.</p>

    <p class="label" v-if="subscribers.length > 0">Subscribers</p>

    <sync-subscriber v-for="sub of subscribers" :key="sub" :subscriber="sub" :label="sub.getDisplayName()"/>

    <p class="label">Add...</p>

    <sync-subscriber-add label="Position" v-if="availableTypes.includes(SubscriberPosition)"
                         @click="addSubscriber(SubscriberPosition)"/>
    <sync-subscriber-add label="Rotation" v-if="availableTypes.includes(SubscriberRotation)"
                         @click="addSubscriber(SubscriberRotation)"/>
    <sync-subscriber-add label="Single value" @click="addSubscriber(SubscriberSingleValue)"/>

  </div>

</template>

<style scoped>

.section-inner {
  display: flex;
  flex-direction: column;

  max-height: 75vh;

  overflow-y: scroll;

  padding: 12px 12px 4px;
  border-radius: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

.info-tab img {
  width: 20px;

  opacity: 75%;
}

.info-tab p {
  margin: 0 0 0 6px;

  opacity: 75%;
}

.info-tab-current img, .info-tab-current p {
  opacity: 100%;
}

.hint {
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #a2a2a2;
  font-style: italic;
}

.color-input p {
  margin: 0;
  margin-right: 10px;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  padding: 2px;
  border-radius: 9px;
  height: 36px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 4px;

  outline: 1px solid rgba(255, 255, 255, 0.2);

  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch:hover {
  border: none;
  border-radius: 4px;

  outline: 1px solid rgba(255, 255, 255, 0.6);
}

input[type="color"]::-webkit-color-swatch:hover {
  outline: 1px solid white;
}

.label {
  text-align: left;
  margin: 4px 4px 8px 0;

  font-weight: bold;
}

</style>

<script>

import SceneObject from "../../../scene/scene_object.js";
import SubscriberPosition from "../../../scene/subscriber_position.js";
import SubscriberSingleValue from "../../../scene/subscriber_single_value.js";
import SubscriberRotation from "../../../scene/subscriber_rotation.js";

export default {
  name: "ObjectInfoSync",

  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  data() {
    return {
      allTypes: [SubscriberPosition, SubscriberSingleValue, SubscriberRotation],
      availableTypes: [],
      subscribers: []
    }
  },

  methods: {
    /**
     * Handle the addition of a new subscriber to the currently
     * selected object.
     * @param type Type (class) of subscriber to add
     */
    addSubscriber(type) {
      this.object.addSubscriber(new type(this.object, ""));

      this.load();
    },

    /**
     * Load the available subscriber types to add to the object.
     */
    load() {
      this.availableTypes = [];

      for (const option of this.allTypes) {
        let has = false;
        for (const subscriber of this.object.getSubscribers()) {
          if (subscriber instanceof option) {
            has = true;
            break;
          }
        }

        if (!has)
          this.availableTypes.push(option);
      }

      this.subscribers = this.object.getSubscribers();
    },
  },

  created() {
    this.load();
  }
};

</script>
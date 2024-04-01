<script setup>

import ObjectInfoID from "../ObjectInfoID.vue";
import SyncSubscriberAdd from "./subscriber/SyncSubscriberAdd.vue";
import SyncSubscriber from "./subscriber/SyncSubscriber.vue";
</script>

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

.section {
  display: flex;
  flex-direction: column;
}

#info-parent {
  position: absolute;
  top: 0;
  left: 0;

  min-width: 25%;
  max-width: 30%;
  max-height: 75%;
}

#info {
  margin-left: 12px;
  margin-top: 12px;
}

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

.section-header {
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;

  background-color: rgba(37, 37, 37, 0.67);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 8px;

  user-select: none;
}

.section-header-icon {
  filter: invert();

  width: 28px;

  margin-left: 4px;
}

.info-tabs {
  flex: 1;
  display: flex;
  flex-direction: row;

  margin-left: 2px;
}

.info-tab {
  flex: 1;
  display: flex;
  flex-direction: row;

  margin-left: 6px;
  padding: 8px;

  border-radius: 4px;

  background-color: rgba(140, 140, 140, 0.15);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  cursor: pointer;
}

.info-tab:hover {
  background-color: rgba(100, 100, 100, 0.15);
}

.info-tab-current {
  outline: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
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

.section-title {
  flex: 1;

  font-size: 24px;
  font-weight: normal;
  margin: 0 8px 0 8px;
}

.section-header-button {
  display: flex;
  align-items: center;

  border-radius: 4px;
  cursor: pointer;
}

.section-header-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  outline: 1px solid rgba(255, 255, 255, 0.5);
}

.section-header-button .section-header-icon {
  width: 24px;
}

.hint {
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #a2a2a2;
  font-style: italic;
}

.single-input {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 16px;
}

.single-input-left {
  display: flex;
  flex-direction: column;
}

.color-input {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.gradient-dots {
  display: flex;
  justify-content: end;
  padding-right: 10px;

  margin-top: 4px;
  margin-bottom: 4px;
}

#color-gradient {
  margin-left: 8px;
  width: 20px;

  outline: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50em;
}

.single-input-input {
  margin-right: 8px;
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
    addSubscriber(type) {
      this.object.addSubscriber(new type(this.object, ""));

      this.load();
    },

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
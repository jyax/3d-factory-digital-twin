<!-- Input box for changing the ID of a SceneObject. -->
<script>

import ObjectInfoInput from "./ObjectInfoInput.vue";
import SceneObject from "../../scene/scene_object.js";

export default {
  extends: ObjectInfoInput,

  props: {
    object: {
      type: SceneObject,
      required: true
    }
  },

  methods: {
    /**
     * Handle the changing of the ID.
     */
    doChange() {
      this.object.id = this.val;

      this.object.events.do("rename");
    },
  },

  created() {
    this.val = this.object.id;
  }
}

</script>
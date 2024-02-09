<script>

import ObjectInfoInput from "./ObjectInfoInput.vue";

export default {
  extends: ObjectInfoInput,

  methods: {
    doChange() {
      this.mgr.getFirstSelected().id = this.val;
    }
  },

  created() {
    if (this.mgr.getFirstSelected() === null) {
      this.val = "";
      return;
    }

    this.val = this.mgr.getFirstSelected().id;
  }
}

</script>
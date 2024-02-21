<script>

import ObjectInfoInput from "./ObjectInfoInput.vue";

export default {
  extends: ObjectInfoInput,

  data() {
    return {
      listener: null
    }
  },

  methods: {
    doChange() {
      this.mgr.getFirstSelected().id = this.val;

      this.mgr.events.do("rename");
    },

    update() {
      if (this.mgr.selectedCount !== 1) {
        this.val = "";
        return;
      }

      this.val = this.mgr.getFirstSelected().id;
    }
  },

  created() {
    this.listener = this.mgr.events.on("select", sel => this.update());

    this.update();
  },

  destroyed() {
    this.mgr.events.remove(this.listener);
  }
}

</script>
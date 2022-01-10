<template>
  <div class="yCollapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"

export default {
  name: "y-collapse",
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected)
  },
}
</script>

<style lang="scss" scoped>
.yCollapse {
  border-top: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
}
</style>
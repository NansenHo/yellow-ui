<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "y-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      if (vm.$options.name === "y-tabs-nav") {
        vm.$children.forEach((vmChildren) => {
          if (vmChildren.$options.name === 'y-tabs-item' && vmChildren.name === this.selected) {
            this.$emit("update:selected", this.selected, vmChildren)
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>
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
    this.checkChildren()
    this.selectTab()
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn("你没有写 y-tabs 里写入任何子组件，y-tabs 的子组件应该是 y-tabs-nav 和 y-tabs-body")
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "y-tabs-nav") {
          vm.$children.forEach((vmChildren) => {
            if (vmChildren.$options.name === 'y-tabs-item' && vmChildren.name === this.selected) {
              this.$emit("update:selected", this.selected, vmChildren)
            }
          })
        }
      })
    },
  }
}
</script>

<style scoped lang="scss">

</style>
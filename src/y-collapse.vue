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
      eventBus: new Vue(),
    }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected)
    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (!this.multiple) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit("update:selected", selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit("update:selected", selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
  },
}
</script>

<style lang="scss" scoped>
.yCollapse {
  border-top: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
}
</style>
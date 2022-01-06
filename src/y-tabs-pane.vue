<template>
  <div v-if="active" class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-tabs-pane",
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (vm) => {
        this.active = vm.name === this.name;
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
  }
}
</style>
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
    this.eventBus.$on('update:selected', (name) => {
      if (name !== this.name) {
        this.active = false
      } else {
        console.log(`pane ${this.name} is selected`)
        this.active = true
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>
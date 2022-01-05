<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-tabs-item",
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
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
    // item 本身也监听这个事件
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  methods: {
    xxx() {
      // 当点击了该item，那就会更新 selected 为 this.name
      this.eventBus.$emit('update:selected', this.name)
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  border: 1px solid green;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    background: red;
  }
}
</style>
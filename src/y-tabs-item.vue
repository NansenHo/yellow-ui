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
      this.eventBus.$emit('update:selected', this ,this.name)
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  color: #303133;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 40px;
  list-style: none;
  font-size: 14px;
  font-weight: 500;

  &.active {
    color: #409eff;
    font-weight: bold;
  }
}
</style>
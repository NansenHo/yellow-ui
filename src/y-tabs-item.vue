<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.active = vm.name === this.name;
      })
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      // 当点击了该item，那就会更新 selected 为 this.name
      this.eventBus.$emit('update:selected', this.name, this)
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

  &.disabled {
    cursor: not-allowed;
    background: #fff;
    color: #c0c4cc;
  }
}
</style>
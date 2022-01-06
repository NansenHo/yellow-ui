<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-tabs-nav",
  inject: ['eventBus'],
  data() {
    return {}
  },
  mounted() {
    this.eventBus.$on("update:selected", (vm) => {
      let {width, left} = vm.$el.getBoundingClientRect()
      if (this.$refs.line) {
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      }
    })
  },
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
.tabs-nav {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #409eff;
    transition: all .25s;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
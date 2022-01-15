<template>
  <div class="tabs-nav" ref="nav">
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
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (item, vm) => {
        let {width, left} = vm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.nav.getBoundingClientRect()
        if (this.$refs.line) {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - left2}px`
        }
      })
    }
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
  border-bottom: 1px solid #e4e7ed;
  margin: 0 0 15px 0;

  .line {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: #409eff;
    border-radius: 8px;
    transition: all .25s;
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
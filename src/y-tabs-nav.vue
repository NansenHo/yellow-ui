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
  created() {
    this.eventBus.$on("update:selected", (vm, item) => {
      console.log(item, "item")
      console.log(vm.$el.getBoundingClientRect());
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
  border: 1px solid black;
  position: relative;

  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #409eff;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
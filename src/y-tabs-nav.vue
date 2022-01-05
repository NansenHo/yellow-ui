<template>
  <div class="tabs-nav">
    <slot></slot>
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

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
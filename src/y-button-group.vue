<template>
  <div class="y-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-button-group',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'y-button') {
        console.warn(`y-button-group 的子元素只能是 y-button，但你写的是 ${name}`);
      }
    }
  },
};
</script>

<style lang="scss"
       scoped>
.y-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .y-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }

    // margin-left: -1px; 和 z-index: 1; 配合解决了三个按钮合一起的时候的边框问题

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>
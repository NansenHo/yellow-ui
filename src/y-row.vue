<template>
  <div class="row"
       :class="rowClass"
       :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-row',
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'middle', 'right'].includes(value);
      }
    }
  },
  computed: {
    rowStyle() {
      return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'};
    },
    rowClass() {
      let {align} = this;
      return [align && `align-${align}`];
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.$data.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss"
       scoped>
.row {
  display: flex;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-middle {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }
}
</style>
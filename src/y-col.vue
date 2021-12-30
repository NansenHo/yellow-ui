<template>
  <div class="col"
       :style="colStyle"
       :class="colClasses">
    <div style="border: 1px solid red;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'y-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClasses() {
      return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`];
    },
    colStyle: function () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      };
    }
  }
};
</script>

<style lang="scss"
       scoped>
.col {
  height: 100px;
  // 虽然每个 col 的宽度都是 50%，但是由于 row 的 flex-wrap 属性默认是 nowrap，并不换行，所以就会挤一行了。
  width: 50%;
  background: gray;
  border: 1px solid #FFF;

  $className: col-; // 声明了一个 className 变量，其值是 col-
  @for $n from 1 through 24 { // loops 循环 24 次
    &.#{$className}#{$n} { // #{} 是插值的意思
      // .col.class-prefix1
      // .col.class-prefixn
      // .col.class-prefix24
      width: ($n/24) * 100%;
    }
  }

  $className: offset-;
  @for $n from 1 through 24 {
    &.#{$className}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

</style>
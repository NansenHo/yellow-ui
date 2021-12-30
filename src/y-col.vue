<template>
  <div class="col"
       :style="colStyle"
       :class="colClasses">
    <slot></slot>
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
    align: {
      type: String,
      validator(value) {
        return ['left', 'middle', 'right'].includes(value);
      }
    },
    phone: {
      type: Object,
      //TODO 这里的验证函数写法 - 笔记
      validator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.foreach((key) => {
          if (['span', 'offset', 'align'].includes(key)) {
            valid = false;
          }
          return valid;
        });
      }
    }
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClasses() {
      let {span, offset, align, phone} = this;
      let phoneClass = [];
      if (phone) {
        phoneClass = [`col-phone-${phone.span}`,];
      }
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`,
        this.align && `align-${this.align}`,
        ...phoneClass
      ];
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
  background: gray;
  display: flex;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-middle {
    justify-content: center;
  }

  &.align-end {
    justify-content: flex-end;
  }

  //TODO SCSS 的 for 循环写法等
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

  //TODO @media 的写法
  @media (max-width: 576px) {

  }
}

</style>
<template>
  <div class="col" :style="colStyle" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
//TODO 这里的验证函数写法 - 笔记
let validator = (value) => {
  let keys = Object.keys(value);
  keys = Array.from(keys);
  let result = true;
  keys.forEach((key) => {
    result = ["span", "align", "offset"].includes(key);
    return result;
  });
  return result;
};
export default {
  name: "y-col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "middle", "right"].includes(value);
      },
    },
    ipad: {
      type: Object,
      // validator: validator, 的省略，js 语法支持这样做
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClasses() {
      let { span, offset, align, phone, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        align && `align-${align}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : []),
      ];
    },
    colStyle: function () {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
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
  @for $n from 1 through 24 {
    // loops 循环 24 次
    &.#{$className}#{$n} {
      // #{} 是插值的意思
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

  //TODO: @media 的写法
  @media (min-width: 577px) and (max-width: 768px) {
    $className: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $className: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $className: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $className: offset-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    $className: col-pc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $className: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    $className: col-widePc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $className: offset-widePc-;
    @for $n from 1 through 24 {
      &.#{$className}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>

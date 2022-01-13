<template>
  <button class="y-button"
          :class="classes"
          @click="$emit('click')"
          v-if="iconPosition === 'right' && $slots.default">
    <slot></slot>
    <y-icon v-if="icon"
            class="y-icon-right"
            :name="icon"></y-icon>
  </button>
  <button class="y-button"
          :class="classes"
          @click="$emit('click')"
          v-else-if="iconPosition === 'left' && $slots.default">
    <y-icon v-if="icon"
            class="y-icon-left"
            :name="icon"></y-icon>
    <slot></slot>
  </button>
  <button class="y-button"
          :class="classes"
          @click="$emit('click')"
          v-else-if="!$slots.default">
    <y-icon v-if="icon"
            :name="icon"></y-icon>
  </button>
</template>

<script>
import Icon from './y-icon';

export default {
  name: 'y-button',
  components: {
    'y-icon': Icon,
  },
  // props: ['icon', 'iconPosition']
  // 用对象的写法可以写更多的功能
  props: {
    icon: {},
    iconPosition: {
      type: String,
      // icon-position 的默认值
      default: 'left',
      // 属性校验器的写法
      validator(value) {
        // return true 不能省略
        return value === 'left' || value === 'right';
        // return value !== 'left' && value !== 'right' ? false : true; // 用三元运算符来做
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled
      }
    }
  },
  mounted() {
    if (this.disabled) {
      // console.log(document.body.querySelector("button"));
      // console.log(document.body.querySelector("button").disabled);
      document.body.querySelector("button").disabled = true
      // console.log(document.body.querySelector("button").disabled);
    }
  },
};
</script>

<style scoped
       lang="scss">
.y-button {
  font-size: 14px;
  padding: 10px 16px;
  color: #6e6d7a;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e7e7e9;
  background: white;
  font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &.disabled {
    cursor: not-allowed;
    background: #fff;
    color: #c0c4cc;
  }

  &.disabled:hover {
    border-color: #c0c4cc;
  }
}

.y-button:hover {
  background-color: #eee;
  border-color: #666;
}

.y-button:active {
  background-color: #eee;
}

.y-button:focus {
  outline: none;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.icon-left {
  margin-right: 0.5em;
  margin-left: 0;
}

.icon-right {
  margin-right: 0;
  margin-left: 0.5em;
}

.y-icon-right {
  margin-right: 0;
  margin-left: 0.5em;
}

.y-icon-left {
  margin-right: 0.5em;
  margin-left: 0;
}
</style>
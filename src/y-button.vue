<template>
  <button class="y-button" v-if="iconPosition === 'right'">
    <slot></slot>
    <y-icon v-if="icon" :name="icon" :iconPosition="iconPosition"></y-icon>
    <y-icon class="loading" name="loading" :iconPosition="iconPosition"></y-icon>
  </button>
  <button class="y-button" v-else>
    <y-icon v-if="icon" :name="icon"></y-icon>
    <y-icon class="loading" name="loading"></y-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'y-button',
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
    }
  },
};
</script>

<style scoped lang="scss">
.y-button {
  font-size: var(--font-size);
  padding: 10px 16px;
  color: var(--button-color);
  text-align: left;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.y-button:hover {
  background-color: var(--button-active-bg);
}

.y-button:active {
  background-color: var(--button-active-bg);
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

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loading {
  animation: spin 1s infinite linear;
}
</style>
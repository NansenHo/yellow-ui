<template>
  <div class="container">
    <y-popover width="250" trigger="click">
      <template slot="content">
        <div>这是一个 div </div>
        <p><a href="https://qq.com">这是一个 a 标签</a></p>
        <y-button>这是一个 y-button 组件</y-button>
      </template>
      <y-button>click 激活</y-button>
    </y-popover>
  </div>
</template>

<script>
import Icon from "../../../src/y-icon"
import Button from "../../../src/y-button"
import Popover from "../../../src/y-popover"

export default {
  name: "yPopover-demo-html",
  components: {
    "y-icon": Icon,
    "y-button": Button,
    "y-popover": Popover
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}

p:first-child {
  margin-top: 0;
}
</style>
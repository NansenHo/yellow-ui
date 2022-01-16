<template>
  <div class="container">
    <y-button>默认按钮</y-button>
    <y-button icon="aui-icon-plus">默认按钮</y-button>
    <y-button icon="aui-icon-recovery">加载中</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"

export default {
  name: "ybutton-demo",
  components: {
    "y-button": Button,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}
</style>
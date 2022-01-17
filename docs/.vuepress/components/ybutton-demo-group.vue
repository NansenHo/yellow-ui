<template>
  <div class="container">
    <y-button-group>
      <y-button icon="aui-icon-left">上一页</y-button>
      <y-button icon="aui-icon-right" icon-position="right">下一页</y-button>
    </y-button-group>
    <y-button-group>
      <y-button icon="aui-icon-pencil"></y-button>
      <y-button icon="aui-icon-share"></y-button>
      <y-button icon="aui-icon-trash"></y-button>
    </y-button-group>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
import ButtonGroup from "../../../src/y-button-group"

export default {
  name: "ybutton-demo-group",
  components: {
    "y-button": Button,
    "y-button-group": ButtonGroup,
  },
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
</style>
<template>
  <div class="ybuttonDisabled">
    <y-button disabled>禁用按钮</y-button>
    <y-button :disabled="true">禁用按钮</y-button>
    <y-button :disabled="false">默认按钮</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
export default {
  name: "ybutton-demo-disabled",
  components: {
    "y-button": Button,
  },
}
</script>

<style scoped>
.ybuttonDisabled{
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}
</style>
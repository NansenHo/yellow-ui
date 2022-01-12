<template>
  <div class="ybuttonDisabled">
    <y-button @click="showToast">打开消息提示</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
import Toast from "../../../src/y-toast"
import plugin from "../../../src/plugin"

export default {
  name: "ybutton-demo-disabled",
  components: {
    "y-button": Button,
    "y-toast": Toast,
  },
  methods: {
    showToast() {
      console.log(2)
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}`, {
        enableHtml: false,
        position: "middle",
        closeButton: {
          text: "已充值",
          callback() {
            console.log(1);
          },
        },
      });
    }
  },
}
</script>

<style scoped>
.ybuttonDisabled {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}
</style>
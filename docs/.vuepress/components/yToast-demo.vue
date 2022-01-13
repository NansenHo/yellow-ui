<template>
  <div class="container">
    <y-button @click="showToast">在屏幕中间打开消息提示</y-button>
    <y-button @click="showToast_top">在屏幕上方打开消息提示</y-button>
    <y-button @click="showToast_bottom">在屏幕上方打开消息提示</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
import Toast from "../../../src/y-toast"
import plugin from "../../../src/plugin"
import Vue from 'vue'

Vue.use(plugin)


export default {
  name: "yToast-demo",
  components: {
    "y-button": Button,
    "y-toast": Toast,
  },
  data() {
    return {
      IQ: parseInt(Math.random() * 100)
    }
  },
  methods: {
    showToast() {
      let that = this
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "middle",
        closeButton: {
          text: "充值",
          callback() {
            that.IQ = that.IQ + 100
            window.alert(`您已充值100，您现在的智商为 ${that.IQ}`)
          },
        },
      });
    },
    showToast_top() {
      let that = this
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "top",
        closeButton: {
          text: "充值",
          callback() {
            that.IQ = that.IQ + 100
            window.alert(`您已充值100，您现在的智商为 ${that.IQ}`)
          },
        },
      });
    },
    showToast_bottom(){
      let that = this
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "bottom",
        closeButton: {
          text: "充值",
          callback() {
            that.IQ = that.IQ + 100
            window.alert(`您已充值100，您现在的智商为 ${that.IQ}`)
          },
        },
      });
    }
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
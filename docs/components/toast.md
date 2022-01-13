---
title: Toast 消息提示
---

# Toast 消息提示

## 基础用法

提供三个位置的消息提示。

<ClientOnly>
<yToast-demo></yToast-demo>
</ClientOnly>

Yellow UI 注册了一个 $toast 方法用于调用，该方法接收两个参数，一个字符串和一个对象。

1. 第一个参数字符串就是会显示的消息内容。 在第二个参数中设置了 `enableHtml` 为 `true` 之后也可以写入 HTML 代码和组件。
2. 第二个参数是传入一个对象，在里面你可以设置消息显示的位置、消息是否自动关闭、自定义关闭按钮的文字和自己写一个点击关闭按钮触发的回调函数。

```vue

<template>
  <div class="container">
    <y-button @click="showToast_top">在屏幕上方打开消息提示</y-button>
    <y-button @click="showToast">在屏幕中间打开消息提示</y-button>
    <y-button @click="showToast_bottom">在屏幕上方打开消息提示</y-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IQ: parseInt(Math.random() * 100)
    }
  },
  methods: {
    showToast_top() {
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "top",
      });
    },
    showToast() {
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "middle",
      });
    },
    showToast_bottom() {
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "bottom",
      });
    }
  },
}
</script>
```

## 自定义回调函数

我们可以自定义关闭按钮的内容，以及点击关闭按钮后触发的回调函数。

<ClientOnly>
<yToast-demo-2></yToast-demo-2>
</ClientOnly>

```vue

<template>
  <div class="container">
    <y-button @click="showToast_HTML">消息内容为 HTML 和组件</y-button>
    <y-button @click="showToast_close">禁用自动关闭</y-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IQ: parseInt(Math.random() * 100)
    }
  },
  methods: {
    showToast_HTML() {
      let that = this
      this.$toast(`<span style="font-weight: bold; color: #3eaf7c">你的智商目前为 ${this.IQ}</span>`, {
        enableHtml: true,
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
    showToast_close() {
      let that = this
      this.$toast(`你的智商目前为 ${this.IQ}`, {
        enableHtml: false,
        position: "middle",
        autoClose: false,
        closeButton: {
          text: "充值",
          callback() {
            that.IQ = that.IQ + 100
            window.alert(`您已充值100，您现在的智商为 ${that.IQ}`)
          },
        },
      });
    },
  },
}
</script>
```
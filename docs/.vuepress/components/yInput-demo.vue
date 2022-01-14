<template>
  <div class="ybutton">
    <p class="title">一般输入框：</p>
    <y-input value="张三"></y-input>

    <div class="box">
      <p class="title">禁用输入框：</p>
      <y-input
          value="李四"
          style="margin-right: 20px"
          :disabled="true"
      ></y-input>
      <y-input value="李四" disabled></y-input>
    </div>
    <div class="box">
      <p class="title">只读输入框：</p>
      <y-input value="王五" readonly></y-input>
    </div>
    <div class="box">
      <p class="title">带警告信息的输入框：</p>
      <y-input value="王五" warn="姓名不能少于两个字"></y-input>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/y-input"

export default {
  name: "ybutton-demo",
  components: {
    "y-input": Input,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.ybutton {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}
</style>
<template>
  <div class="container">
    <y-input
        v-model="message"
        placeholder="请输入内容"
        value=""></y-input>
  </div>
</template>

<script>
import Input from "../../../src/y-input"

export default {
  name: "yInput-demo",
  components: {
    "y-input": Input,
  },
  data() {
    return {
      message: ""
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
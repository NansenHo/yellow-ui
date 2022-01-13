<template>
  <div class="container">
    <y-button @click="test" disabled>禁用按钮</y-button>
    <y-button :disabled="true" @click="test">禁用按钮</y-button>
    <y-button :disabled="false" @click="test">默认按钮</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
export default {
  name: "ybutton-demo-disabled",
  components: {
    "y-button": Button,
  },
  methods:{
    test(){
      console.log(1)
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
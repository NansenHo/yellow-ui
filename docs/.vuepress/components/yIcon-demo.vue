<template>
  <div class="container">
    <y-icon class="icon" name="aui-icon-plus"></y-icon>
    <y-icon class="icon" name="aui-icon-comment"></y-icon>
    <y-icon class="icon" name="aui-icon-image"></y-icon>
    <y-button class="button" icon="aui-icon-weichat-circle">分享</y-button>
  </div>
</template>

<script>
import Icon from "../../../src/y-icon"
import Button from "../../../src/y-button"

export default {
  name: "yIcon-demo",
  components: {
    "y-icon": Icon,
    "y-button": Button,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);

  > .icon {
    margin: 0 10px;
  }
  >.button {
    margin-left: 10px;
  }
}
</style>
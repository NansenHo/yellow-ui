<template>
  <div>
    <y-button>默认按钮</y-button>
    <y-button icon="settings">默认按钮</y-button>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
export default {
  name: "ybutton-demo",
  components: {
    "y-button": Button,
  },
}
</script>

<style scoped>

</style>
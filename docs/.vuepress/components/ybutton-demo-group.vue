<template>
  <div class="ybuttonDisabled">
    <div class="box">
      <y-button-group>
        <y-button icon="left">上一页</y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
    </div>
    <div>
      <y-button-group>
        <y-button icon="left"></y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right"></y-button>
      </y-button-group>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/y-button"
import ButtonGroup from "../../../src/y-button-group"

export default {
  name: "ybutton-demo-disabled",
  components: {
    "y-button": Button,
    "y-button-group": ButtonGroup,
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
.box {
  margin: 0 0 20px 0 ;
}
</style>
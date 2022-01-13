<template>
  <div class="container">
    <div>
      <p>click 触发</p>
      <y-popover position="top" trigger="click">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>上方弹出</y-button>
      </y-popover>

      <y-popover position="right" trigger="click">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>右边弹出</y-button>
      </y-popover>

      <!--    <div @click="test">-->
      <y-popover position="bottom" trigger="click">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>下面弹出</y-button>
      </y-popover>
      <!--    </div>-->

      <y-popover position="left" trigger="click">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <y-button>左边弹出</y-button>
      </y-popover>
    </div>

    <div>
      <p>hover 触发</p>
      <y-popover width="250" trigger="hover">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <y-button>上面弹出</y-button>
      </y-popover>

      <y-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>右边弹出</y-button>
      </y-popover>

      <!--    <div @click="test">-->
      <y-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>下面弹出</y-button>
      </y-popover>

      <y-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
          </div>
        </template>
        <y-button>左边弹出</y-button>
      </y-popover>
    </div>
  </div>

</template>

<script>
import Icon from "../../../src/y-icon"
import Button from "../../../src/y-button"
import Popover from "../../../src/y-popover"

export default {
  name: "yPopover-demo",
  components: {
    "y-icon": Icon,
    "y-button": Button,
    "y-popover": Popover
  },
  data() {
    return {}
  }
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
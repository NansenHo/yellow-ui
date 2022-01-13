<template>
  <div class="container">
    <y-tabs :selected.sync="selected" direction="vertical">
      <y-tabs-nav>
        <template slot="actions">
          <y-icon name="aui-icon-gear"></y-icon>
        </template>
        <y-tabs-item name="world">
          世界杯
        </y-tabs-item>
        <y-tabs-item name="olympics">
          奥运会
        </y-tabs-item>
        <y-tabs-item name="chinese">
          全运会
        </y-tabs-item>
      </y-tabs-nav>
      <y-tabs-body>
        <y-tabs-pane name="world">
          世界杯相关
        </y-tabs-pane>
        <y-tabs-pane name="olympics">
          奥运会相关
        </y-tabs-pane>
        <y-tabs-pane name="chinese">
          全运会相关
        </y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/y-tabs"
import TabsBody from "../../../src/y-tabs-body"
import TabsNav from "../../../src/y-tabs-nav"
import TabsItem from "../../../src/y-tabs-item"
import TabsPane from "../../../src/y-tabs-pane"
import Icon from "../../../src/y-icon"

export default {
  name: "ybutton-demo-disabled",
  components: {
    "y-tabs": Tabs,
    "y-tabs-body": TabsBody,
    "y-tabs-nav": TabsNav,
    "y-tabs-item": TabsItem,
    "y-tabs-pane": TabsPane,
    "y-icon": Icon,
  },
  data() {
    return {
      selected: "world"
    }
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
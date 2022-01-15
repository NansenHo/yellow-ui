---
title: Tabs 标签页
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基本用法

基础的标签页

<ClientOnly>
<yTabs-demo></yTabs-demo>
</ClientOnly>

```vue
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

<script>
export default {
  data() {
    return {
      selected: "world"
    }
  }
}
</script>
```


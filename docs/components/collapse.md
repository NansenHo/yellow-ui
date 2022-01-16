---
title: Collapse 折叠面板
---

# Collapse 折叠面板

通过折叠面板收纳内容区域。

> `name` 属性为必填的属性，而且属性值不能重复。

## 基础用法

设置 `multiple` 属性即可同时展开多个面板，面板之间不受影响。

也可以实现默认打开多个面板。如下面代码通过设置 `selectedTab` 为一个多个元素数组即可实现。

<ClientOnly>
<yCollapse-demo-multiple></yCollapse-demo-multiple>
</ClientOnly>

```vue
<y-collapse :selected.sync="selectedTab" multiple>
  <y-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </y-collapse-item>
  <y-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </y-collapse-item>
  <y-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </y-collapse-item>
  <y-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </y-collapse-item>
</y-collapse>

<script>
export default {
  data() {
    return {
      selectedTab: ["1", "3"],
    }
  }
}
</script>
```


## 手风琴效果

每次只能展开一个面板

<ClientOnly>
<yCollapse-demo></yCollapse-demo>
</ClientOnly>

可以通过 title 属性来实现自定义面板的标题内容。

```vue
<y-collapse :selected.sync="selectedTab">
  <y-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </y-collapse-item>
  <y-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </y-collapse-item>
  <y-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </y-collapse-item>
  <y-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </y-collapse-item>
</y-collapse>

<script>
export default {
  data() {
    return {
      selectedTab: "1",
    }
  }
}
</script>
```


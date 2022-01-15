---
title: Popover 弹出框
---

# Popover 弹出框

## 基础用法

popover 弹出框提供 click 触发和 hover 触发两种触发方式。

<ClientOnly>
<yPopover-demo></yPopover-demo>
</ClientOnly>

```vue
<p>click 触发</p>
<div class="row">
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

<p>hover 触发</p>
<div class="row">
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
```
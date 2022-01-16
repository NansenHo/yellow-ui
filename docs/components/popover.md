---
title: Popover 弹出框
---

# Popover 弹出框

## 基本用法

popover 弹出框提供 click 激活和 hover 激活两种触发方式。

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

## 嵌套 HTML 和组件

可以在 Popover 中嵌套 HTML 和 组件。

<ClientOnly>
<yPopover-demo-html></yPopover-demo-html>
</ClientOnly>

```vue
<y-popover width="250" trigger="click">
  <template slot="content">
    <div>这是一个 div </div>
    <p><a href="https://qq.com">这是一个 a 标签</a></p>
    <y-button>这是一个 y-button 组件</y-button>
  </template>
  <y-button>click 激活</y-button>
</y-popover>
```
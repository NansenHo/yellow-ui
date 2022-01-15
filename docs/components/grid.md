---
title: Grid 栅栏
---

# Grid 栅栏

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法

使用单一分栏创建基础的栅格布局。

<ClientOnly>
<yGrid-demo></yGrid-demo>
</ClientOnly>

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue

<y-row class="row">
    <y-col :span="24">
      <div class="grid-content bg-youhuang"></div>
    </y-col>
</y-row>
<y-row class="row">
    <y-col span="12">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="12">
      <div class="grid-content bg-light"></div>
    </y-col>
</y-row>
<y-row class="row">
    <y-col span="8">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="8">
      <div class="grid-content bg-light"></div>
    </y-col>
    <y-col span="8">
      <div class="grid-content bg-deep"></div>
    </y-col>
</y-row>
<y-row class="row">
    <y-col span="6">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="6">
      <div class="grid-content bg-light"></div>
    </y-col>
    <y-col span="6">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="6">
      <div class="grid-content bg-light"></div>
    </y-col>
</y-row>
<y-row class="row">
    <y-col span="4">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="4">
      <div class="grid-content bg-light"></div>
    </y-col>
    <y-col span="4">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="4">
      <div class="grid-content bg-light"></div>
    </y-col>
    <y-col span="4">
      <div class="grid-content bg-deep"></div>
    </y-col>
    <y-col span="4">
      <div class="grid-content bg-light"></div>
    </y-col>
</y-row>
```

## 分栏偏移

支持偏移指定的栏数。

<ClientOnly>
<yGrid-demo-offset></yGrid-demo-offset>
</ClientOnly>

```vue
<y-row class="row">
  <y-col span="6">
    <div class="grid-content bg-deep"></div>
  </y-col>
  <y-col span="6" offset="3">
    <div class="grid-content bg-light"></div>
  </y-col>
  <y-col span="6" offset="3">
    <div class="grid-content bg-deep"></div>
  </y-col>
</y-row>
<y-row class="row">
  <y-col span="6" offset="6">
    <div class="grid-content bg-light"></div>
  </y-col>
  <y-col span="6" offset="6">
    <div class="grid-content bg-deep"></div>
  </y-col>
</y-row>
<y-row class="row">
  <y-col span="12" offset="12">
    <div class="grid-content bg-light"></div>
  </y-col>
</y-row>
```

## 分栏间隔

分栏之间存在间隔。

<ClientOnly>
<yGrid-demo-gutter></yGrid-demo-gutter>
</ClientOnly>

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<y-row class="row" gutter="20">
  <y-col span="6">
    <div class="grid-content bg-deep"></div>
  </y-col>
  <y-col span="6">
    <div class="grid-content bg-light"></div>
  </y-col>
  <y-col span="6">
    <div class="grid-content bg-deep"></div>
  </y-col>
  <y-col span="6">
    <div class="grid-content bg-deep"></div>
  </y-col>
</y-row>
```
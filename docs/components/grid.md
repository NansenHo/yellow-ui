---
title: Grid 栅栏
---

# Grid 栅栏

通过基础的 24 分栏，迅速简便地创建布局。

## 基本用法

使用单一分栏创建基础的栅格布局。

<ClientOnly>
<yGrid-demo></yGrid-demo>
</ClientOnly>

通过 row 和 col 组件，并设置 col 组件的 `span` 属性我们就可以自由地组合布局。

`span` 属性接受的值的类型可以是 String/Number。

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

`offset` 属性接受的值的类型可以是 String/Number。

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

Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0 px。

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

## 对齐方式

<ClientOnly>
<yGrid-demo-align></yGrid-demo-align>
</ClientOnly>

`align` 属性可以控制整个 row 的对齐方式，它接受 "left" / "middle" / "right" 三个值。

```vue
<template>
  <div class="container">
    <y-row class="row" gutter="10" align="left">
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
    </y-row>
    <y-row class="row" gutter="10" align="middle">
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
    </y-row>
    <y-row class="row" gutter="10" align="right">
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
    </y-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.bg-deep {
  background: #f9d27d;
  min-height: 36px;
  border-radius: 4px;
  width: 100%;
}

.row {
  margin-bottom: 20px;
}

.row:last-child {
  margin-bottom: 0;
}
</style>
```
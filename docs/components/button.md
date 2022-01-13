---
title: y-button 按钮
---

# Button 按钮

常用的操作按钮。

## 基础用法

无图标的按钮和有图标的按钮。
<ClientOnly>
<ybutton-demo></ybutton-demo>
</ClientOnly>

```vue
<y-button>默认按钮</y-button>
<y-button icon="set">默认按钮</y-button>
<y-button icon="loading">默认按钮</y-button>
```

icon 属性可以设置 icon

## 禁用状态

按钮不可用状态。

<ClientOnly>
<ybutton-demo-disabled></ybutton-demo-disabled>
</ClientOnly>

```vue
<y-button disabled>禁用按钮</y-button>
<y-button :disabled="true">禁用按钮</y-button>
<y-button :disabled="false">默认按钮</y-button>
```

## 按钮组

多个按钮以按钮组的形式出现，常用于多项类似操作。

<ClientOnly>
<ybutton-demo-group></ybutton-demo-group>
</ClientOnly>

```vue
<template>
  <div class="container">
    <y-button-group>
      <y-button icon="aui-icon-left">上一页</y-button>
      <y-button icon="aui-icon-right" icon-position="right">下一页</y-button>
    </y-button-group>
    <y-button-group>
      <y-button icon="aui-icon-pencil"></y-button>
      <y-button icon="aui-icon-share"></y-button>
      <y-button icon="aui-icon-trash"></y-button>
    </y-button-group>
  </div>
</template>
```
---
title: Input 输入框
---

# Input 输入框

## 基础用法

<ClientOnly>
<yInput-demo></yInput-demo>
</ClientOnly>

```vue
<y-input placeholder="请输入内容" value=""></y-input>
```

## 禁用状态

<ClientOnly>
<yInput-demo-2></yInput-demo-2>
</ClientOnly>

通过 `disabled` 属性指定是否禁用 input 组件。

```vue
<y-input value="" placeholder="请输入内容" disabled></y-input>
```

## 只读状态

<ClientOnly>
<yInput-demo-readonly></yInput-demo-readonly>
</ClientOnly>

通过 `readonly` 属性指定是否让 input 组件只读。

```vue
<y-input value="" placeholder="请输入内容" readonly></y-input>
```

## 带提示信息的输入框

<ClientOnly>
<yInput-demo-warn></yInput-demo-warn>
</ClientOnly>
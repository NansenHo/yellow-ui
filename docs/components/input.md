---
title: Input 输入框
---

# Input 输入框

## 基础用法

<ClientOnly>
<yInput-demo></yInput-demo>
</ClientOnly>

```vue

<y-input 
    v-model="message" 
    placeholder="请输入内容" 
    value=""></y-input>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>
```

## 禁用状态

<ClientOnly>
<yInput-demo-2></yInput-demo-2>
</ClientOnly>

通过 `disabled` 属性指定是否禁用 input 组件。

```vue

<y-input 
    v-model="message" 
    value="" 
    placeholder="请输入内容" 
    disabled></y-input>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>
```

## 只读状态

<ClientOnly>
<yInput-demo-readonly></yInput-demo-readonly>
</ClientOnly>

通过 `readonly` 属性指定是否让 input 组件只读。

```vue
<y-input
    value="" 
    placeholder="请输入内容" 
    readonly></y-input>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>
```

## 带提示信息的输入框

<ClientOnly>
<yInput-demo-warn></yInput-demo-warn>
</ClientOnly>

通过 `warn` 属性可以指定提示信息。

```vue
<y-input 
    v-model="message" 
    value="" 
    placeholder="请输入内容" 
    warn="长度不能少于两个字"></y-input>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>
```



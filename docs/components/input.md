---
title: Input 输入框
---

# Input 输入框

## 基本用法

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

## 事件绑定

<ClientOnly>
<yInput-demo-event></yInput-demo-event>
</ClientOnly>

+ `input` 事件在 Input 失去焦点时触发；
+ `change` 事件仅在输入框失去焦点或用户按下回车时触发；
+ `focus` 事件在 Input 获得焦点时触发；
+ `blur` 事件在在 Input 失去焦点时触发；


```vue
<y-input
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-model="message"
    value=""
    placeholder="请输入内容">
</y-input>

<script>
export default {
  data() {
    return {
      message: ""
    }
  },
  methods: {
    handleInput(value) {
      console.log(value, "handleInput");
    },
    handleChange(value) {
      console.log(value, "handleChange")
    },
    handleFocus(value) {
      console.log(value, "focus")
    },
    handleBlur(value) {
      console.log(value, "blur")
    }
  },
}
</script>
```
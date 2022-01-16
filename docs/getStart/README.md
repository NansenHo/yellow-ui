---
title: 快速上手
---


# 快速上手

## 添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box 。

```CSS
* { box-sizing: border-box}
*::before {box-sizing: border-box}
*::after {box-sizing: border-box}
```
IE 8 及以上浏览器支持该样式；


## 引入

1. 在 main.js 中全局引入

```javascript
import {Button} from 'yellow'
import 'yellow/dist/index.css'

Vue.component('y-button', Button);
```

2. 在组件中引入

```vue

<script>
import {Button} from 'yellow'
import 'yellow/dist/index.css'

export default {
  components: {
    'y-button': Button,
  },
}
</script>
```
# yellow - 这是一个 Vue UI 组件

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

### 安装
#### 1. 添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box 。

```CSS
* { box-sizing: border-box}
*::before {box-sizing: border-box}
*::after {box-sizing: border-box}
```
IE 8 及以上浏览器支持该样式；

并将默认颜色等变量也写进去。
```CSS
:root {
--button-color: #6e6d7a;
--button-height: 32px;
--font-size: 14px;
--button-bg: white;
--button-active-bg: #eee;
--border-radius: 8px;
--border-color: #E7E7E9;
--border-color-hover: #666;
}
```
 IE 15 及以上浏览器支持该样式。

#### 2. 安装 yellow

请在使用 vue-cli 来搭建的项目中使用该 package。 并使用 yarn 来安装。

```shell
yarn add yellow --save
```

#### 3. 引入

1. 在 main.js 中全局引入

```javascript
import {Button, Icon, ButtonGroup} from 'yellow'
import 'yellow/dist/index.css'

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);
```

2. 在组件中引入

```vue

<script>
import {Button, Icon, ButtonGroup} from 'yellow'
import 'yellow/dist/index.css'

export default {
  components: {
    'y-button': Button,
    'y-icon': Icon,
    'y-button-group': ButtonGroup
  },
}
</script>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

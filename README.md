# yellow

## 介绍

这是一个简单易用且漂亮的 Vue UI 框架。

在公司项目中接触到了 elementUI ，觉得 elementUI 真的极大地方便了前端画面的开发，尤其是后台管理类项目。

用得越多，就对 UI 框架的开发越感兴趣，也越发好奇 elementUI 是怎么写的。

于是就想着自己也试着来写一个简易的 UI 框架体会一下。

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

#### 2. 安装 yellow

请在使用 vue-cli 来搭建的项目中使用该 package。

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
+ 

## 贡献代码

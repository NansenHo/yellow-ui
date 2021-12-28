yellow - 这是一个 Vue UI 组件

作者：何南松

## 安装

使用本框架前，请在 CSS 中开启 border-box 。

```CSS
* { box-sizing: border-box}
```

请在使用 vue-cli 来搭建的项目中使用该 package。 并使用 yarn 来安装。

```shell
yarn add yellow
```

## 引入

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

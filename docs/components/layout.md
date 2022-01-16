---
title: Layout 布局
---

# Layout 布局

## 基本用法

用于布局的容器组件，方便快速搭建页面的基本结构：

+ `<y-container>`：外层容器。 当子元素中不包含 `<y-aside>` 时，全部子元素会垂直上下排列，否则会水平左右排列。
  
+ `<y-header>`：顶栏容器。

+ `<y-aside>`：侧边栏容器。

+ `<y-content>`：主要区域容器。

+ `<y-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<y-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<y-container>`。


<ClientOnly>
<yLayout-demo></yLayout-demo>
</ClientOnly>

```vue
<y-container class="y-container">
  <y-header class="y-header">header</y-header>
  <y-content class="y-content">content</y-content>
  <y-footer class="y-footer">footer</y-footer>
</y-container>

<y-container class="y-container-aside">
  <y-header class="y-header-aside">header</y-header>
  <y-container class="y-container-aside2">
    <y-aside class="y-aside">aside</y-aside>
    <y-content class="y-content-aside">content</y-content>
  </y-container>
  <y-footer class="y-footer-aside">footer</y-footer>
</y-container>

<y-container class="y-container-left">
  <y-aside class="y-aside-left">aside</y-aside>
  <y-container class="y-container-left2">
    <y-header class="y-header-left">header</y-header>
    <y-content class="y-content-left">content</y-content>
    <y-footer class="y-footer-left">footer</y-footer>
  </y-container>
</y-container>

<style scoped lang="scss">
.y-container {
  height: 300px;
  margin-bottom: 20px;
}

.y-header {
  height: 50px;
  background: #fecc11;
  text-align: center;
  line-height: 50px;
}

.y-content {
  background: #f9d770;
  text-align: center;
  line-height: 200px;
}

.y-footer {
  height: 50px;
  background: #fecc11;
  text-align: center;
  line-height: 50px;
}

.y-container-aside {
  height: 300px;
  overflow: hidden;

  > .y-header-aside {
    height: 50px;
    background: #fecc11;
    text-align: center;
    line-height: 50px;
  }

  > .y-footer-aside {
    height: 50px;
    background: #fecc11;
    text-align: center;
    line-height: 50px;
  }

  > .y-container-aside2 {
    > .y-aside {
      background: #f4ce69;
      width: 60px;
      text-align: center;
      line-height: 200px;
    }

    > .y-content-aside {
      background: #f9d770;
      text-align: center;
      line-height: 200px;
    }
  }
}

.y-container-left {
  height: 300px;

  > .y-aside-left {
    width: 60px;
    line-height: 300px;
    text-align: center;
    background: #f4ce69;
  }

  > .y-container-left2 {

    > .y-header-left {
      background: #fecc11;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    > .y-content-left {
      background: #f9d770;
      line-height: 200px;
      text-align: center;
    }

    > .y-footer-left {
      background: #fecc11;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>
```
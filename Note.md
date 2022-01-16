# 笔记

## 项目相关

### 技术栈

1. 单文件组件 Vue
2. parcel 打包
3. 单元测试
4. 自动测试
5. 持续集成
6. npm 发布相关 package.json 的配置等
7. yarn/npm link

## CSS

### 负 margin 让 border 重合

如果两个 border 你想让他们重合，那你可以使用负 margin 。

### 画一个小三角形（popover）

这样就能画出一个小三角形。

```scss
  &::before {
  content: "";
  display: block;
  border: 10px solid red;
  border-top-color: black;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 10px;
}
```

### word-break

英文网站推荐不要使用 `word-break: break-all;`

因为 break-all 会把很多单词拦腰斩断，比较影响阅读体验。

中文的话还行。

### calc() 是一个 CSS 函数

该函数允许在声明 CSS 属性值时，执行一些计算。[calc() MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc())

用法举例：

```scss
div {
  width: calc(100% / 6);
  width: calc(100% - 1em);
  width: calc(100% - 80px);
}

// 也可以和变量一块用
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

### 把元素放置在画面的最右边

```css
/* y-tabs-nav.vue */
.actions-wrapper {
    margin-left: auto;
}
```

### transform

transform : 使改变形态；使改变外观（或性质）；使改观；

注意，像下面一样 translateX 和 translateY 一起使用的话，前面的 translateX 会失效。

```css
.xxx {
    transform: translateX(-50%);
    transform: translateY(-50%);
}
```

所以如果我们想在 X 轴和 Y 轴都设置时，需要这样用

```css
.xxx {
    transform: translate(-50%, -50%);
}
```

### CSS 动画

```css
/* icon.vue */
/* 声明一个叫 spin 的旋转动画*/
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loading {
    animation: spin 1s infinite linear;
    /*
      infinite : 无限循环
      linear: 线性变化
      */
}
```

### SCSS 写法

```scss
// y-button-group.vue
.y-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .y-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }

    // margin-left: -1px; 和 z-index: 1; 配合解决了三个按钮合一起的时候的边框问题

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
```

```scss
// y-col.vue
.col {
  height: 100px;
  // 虽然每个 col 的宽度都是 50%，但是由于 row 的 flex-wrap 属性默认是 nowrap，并不换行，所以就会挤一行了。
  width: 50%;
  background: gray;
  border: 1px solid #fff;

  $className: col-; // 声明了一个 className 变量，其值是 col-
  @for $n from 1 through 24 {
    // loops 循环 24 次
    &.#{$className}#{$n} {
      // #{} 是插值的意思
      // .col.class-prefix1
      // .col.class-prefixn
      // .col.class-prefix24
      width: ($n/24) * 100%;
    }
  }
}
```

### 根据元素上某个属性的存在与否来选择元素

[CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)

根据一个元素上的某个属性的存在来选择元素：

```css
/* y-input.vue */
.y-input[disabled] {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
}
```

### CSS 水平居中

```css
.toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
```

### SCSS 的 for 循环写法

```scss

```

### 自适应和响应式

`display:flex` 就是自适应的。

响应式网页布局设计就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。

如何实现响应式，要让 `y-col` 的 class 在手机上时，是一套 class ，在电脑上时，是另外一套。

- 那我们就需要让 js 获取到的 props 能放到 html 的 class 上，
- 这样 css 就能根据不同的 class 展示不同的显示效果，
- 否则 css 无法获取到 js 里 props 的变化。

### 警告用户不要在 y-button 组件外包 div

```javascript
// y-button-group.vue
export default {
    mounted() {
        // 这里不能用 in
        // this.$children 只能拿到 VueComponent 而 this.$el 可以拿到原生元素
        for (let node of this.$el.children) {
            // String.prototype.toLowerCase() 将调用该方法的字符串值转为小写形式
            let name = node.nodeName.toLowerCase();
            if (name !== "button") {
                console.warn(
                    `y-button-group 的子元素只能是 y-button，但你写的是 ${name}`
                );
            }
        }
    },
};
```

### CSS 的先后顺序与优先级

越靠后的 CSS 的优先级越高。

```scss
.col {
  border: 1px solid blue;
}

@media (max-width: 576px) {
  .col {
    border: 1px solid red;
  }
}
```

- 我们这样将手机端的样式放在后面的话，页面就会默认显示 blue，
- 也只有写在后面，手机端样式生效了，才能盖过写在优先级更低前面的 blue，
- 如果手机端样式写在 blue 的前面，那切换到手机页面也无法生效了， 因为优先级不够。

### flex-shrink

[flex-shrink - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)

**`flex-shrink`** 属性指定了 flex 元素的收缩规则。

flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

### `min-height` 和 ` height: 100%`

如果父元素的高度是用 min-height 来写的，那其子元素再写 height: 100% 是不会生效的。

## JavaScript

### 表驱动编程

逻辑相似的多个 if & else if & else ... 可以用表驱动编程来重构、优化。

```javascript
let {contentWrapper, triggerWrapper} = this.$refs
document.body.appendChild(contentWrapper)
let {height, top, left, width} = triggerWrapper.getBoundingClientRect()
let {height: height_contentWrapper} = contentWrapper.getBoundingClientRect()
if (this.position === 'top') {
    // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
    contentWrapper.style.left = left + window.scrollX + 'px';
    contentWrapper.style.top = top + window.scrollY + 'px';
} else if (this.position === "bottom") {
    contentWrapper.style.left = left + window.scrollX + 'px';
    contentWrapper.style.top = top + height + window.scrollY + 'px';
} else if (this.position === 'left') {
    contentWrapper.style.left = left + window.scrollX + 'px';
    contentWrapper.style.top = top + window.scrollY + (height - height_contentWrapper) / 2 + 'px';
} else if (this.position === "right") {
    contentWrapper.style.left = left + window.scrollX + width + 'px';
    contentWrapper.style.top = top + window.scrollY + (height - height_contentWrapper) / 2 + 'px';
}
```

从上面呢我们可以看出来

|      | top | right | bottom | left |
|:-----|-----|-------|--------|------|
| top  | ... | ...   | ...    | ...  |
| left | ... | ...   | ...    | ...  |

我们的逻辑就是这张表，四列分别有自己的 top 和 left 。

我们现在需要写一个逻辑来一个对象。

```javascript
let positionTable = {
    top: {
        top: top + window.scrollY,
        left: left + window.scrollX,
    },
    right: {
        top: top + window.scrollY + (height - height_contentWrapper) / 2,
        left: left + window.scrollX + width,
    },
    bottom: {
        top: top + height + window.scrollY,
        left: left + window.scrollX,
    },
    left: {
        top: top + window.scrollY + (height - height_contentWrapper) / 2,
        left: left + window.scrollX,
    },
}
```

然后再将对应的值放到 top 和 left 里去

```javascript
contentWrapper.style.top = positionTable[this.position].top + "px";
contentWrapper.style.left = positionTable[this.position].left + "px";
```

这样就ok了，避免了 if else 写过多的逻辑。这样清晰明明了，简洁大方地就解决了问题。

下面是最终的完整代码：

```javascript
const {contentWrapper, triggerWrapper} = this.$refs
document.body.appendChild(contentWrapper)
const {height, top, left, width} = triggerWrapper.getBoundingClientRect()
const {height: height_contentWrapper} = contentWrapper.getBoundingClientRect()
let positionTable = {
    top: {
        top: top + window.scrollY,
        left: left + window.scrollX,
    },
    right: {
        top: top + window.scrollY + (height - height_contentWrapper) / 2,
        left: left + window.scrollX + width,
    },
    bottom: {
        top: top + height + window.scrollY,
        left: left + window.scrollX,
    },
    left: {
        top: top + window.scrollY + (height - height_contentWrapper) / 2,
        left: left + window.scrollX,
    },
}
contentWrapper.style.top = positionTable[this.position].top + "px";
contentWrapper.style.left = positionTable[this.position].left + "px";
```

### contains 方法

[contains 方法](https://www.cnblogs.com/rubylouvre/archive/2009/10/14/1583523.html)

文章批注：

+ firefox 也是支持该方法的。

如果A元素包含B元素，则返回true，否则false。

唯一不支持这个方法的是IE的死对头firefox。

### documentClick() 和 documentClick.bind(this) 是两个不同的函数

```vue

<script>
export default {
  methods: {
    appear() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          // 我们这里绑定的事件不是 documentClick() 而是 documentClick.bind(this)
          document.addEventListener("click", function documentClick() {
            this.visible = false
            document.removeEventListener('click', documentClick)
          }.bind(this))
        })
      }
    }
  }
}
</script>
```

所以当我们写 `document.removeEventListener('click', documentClick)` 的时候，实际上移除的方法是 documentClick()，但 documentClick.bind(this)
还在 document 上。

### Element.getBoundingClientRect()

[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

### Math.abs()

Math.abs(x) 函数返回指定数字 “x“ 的绝对值。

### Math.random()

Math 是 JavaScript 的原生对象，提供各种数学功能。

该对象不是构造函数，不能生成实例，所有的属性和方法都必须在 Math 对象上调用。

`Math.random()` 返回 0 到 1 之间的一个伪随机数，可能等于 0 ，但是一定小于 1 。

该随机数的数据类型是 number 类型。

### parseInt(string, radix)

解析一个字符串并返回指定基数的十进制整数。

接受以下两个参数：

1. 第一个参数 string 是要被解析的值。如果参数不是一个字符串，则将其转换为字符串
2. radix（可选），从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。 注意，10 不是 redix 的默认值。

### Array.prototype.includes() 会返回一个 Boolean 值

[Array.prototype.includes mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

### 推荐使用 indexOf() 替代 includes() 因为兼容性更好

但推荐用另一个兼容性更好的方法：`indexOf()` [indexOf MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

### 函数的参数默认值设置

```javascript
let x = (obj, devices = "") => {
    // str 默认等于空字符串
    let array = [];
    if (obj.span) {
        array.push(`col-${devices}-${obj.span}`);
    }
    if (obj.offset) {
        array.push(`offset-${devices}-${obj.offset}`);
    }
    if (obj.align) {
        array.push(`align-${devices}-${obj.align}`);
    }
    return array;
};
```

## Vue

###         

### .stop 事件修饰符用于阻止事件冒泡

[Vue 事件修饰符](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

```vue

<template>
  <div class="popover" @click.stop="appear">
    <div class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
```

但对于我们的 UI 组件库项目来说，最好是所有的组件都不要阻止冒泡。

我们阻止了用户就会遇到很多bug。

### slot

一个组件里可以有多个 `<slot></slot>` 。

```vue
<!--y-tabs-nav-->
<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
```

```vue

<y-tabs-nav>
<template slot="actions">
  <button>设置</button>
</template>
<y-tabs-item name="world">
  世界杯
</y-tabs-item>
<y-tabs-item name="olympics" disabled>
  奥运会
</y-tabs-item>
<y-tabs-item name="chinese">
  全运会
</y-tabs-item>
</y-tabs-nav>
```

我们在 slot 组件上设置一个 name 属性，然后我们插入东西的时候，只需要在插入内容上再加上一个 slot 属性，上面写上 slot 组件对应的 name 值即可。

如果没有写 slot 属性的东西就默认放到没有 name 属性的 slot 组件中。

### slot 组件上不能使用 class 属性

如果需要加 class 那就得在 slot 的外层包上 div，再给外层的 div 加上 class ，把样式写在外层 div 上即可。

```vue

<div class="xxx">
<slot></slot>
</div>

<style>
.xxx {
}
</style>
```

### provide & inject & eventBus

如果一个 Vue 实例里写了 provide 属性，那该实例的所有子孙后代都可以访问到这个 provide 。

provide 是唯一一个跨子孙曾孙...组件也能调用的组件。

provide 选项应该是**一个对象**或**返回一个对象的函数**。比如下面这种写法：

```vue

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() { // 返回一个对象的函数
    return {
      eventBus: this.eventBus,
    }
  },
}
</script>
```

EventBus 实际上是一个不具备 DOM 的组件，它有的仅仅是它的实例方法而已，所以非常轻便。

我们也只需要它的实例方法，

+ $emit 触发/发布一个事件
+ $on 监听/订阅一个事件
+ $off 取消监听/订阅一个事件

只要能有以上三个行为的东西就可以，而一个 Vue 实例就具有以上三个行为，所以我们选择了一个叫 EventBus 的 Vue 实例来满足需求。

而且单独的一个和其他组件没有关系的 EventBus 使用起来更加方便。

我们有两种方式来初始化 EventBus：

1. 创建一个 .js 文件然后在组件引入该 js 文件，或者直接在组件中初始化 EventBus
   ```javascript
    // .js 文件内可以这样写
    import Vue from 'vue'
    export const EventBus = new Vue()
    ```
   我们这次用的就是直接在组件中初始化 EventBus 这种方式。
2. 直接在项目中的 main.js 中初始化 EventBus 这种方式初始化的 EventBus 是一个全局的事件总线
   ```javascript
    // main.js
    Vue.prototype.$EventBus = new Vue()
    ```

那后代如何访问到祖先组件的这个 provide 呢？

只需要注入 `inject: ['eventBus'],` 即可。大家拿到的都是 eventBus 的引用。

```vue

<script>
export default {
  inject: ['eventBus'],
  created() {
    console.log(this.eventBus, "eventBus");
  },
}
</script>
```

### Vue 的事件是不会冒泡的

Vue 的事件是不会冒泡的，在子标签上触发的事件，不会传到父标签上。

事件在哪里被调用，就只能在哪里被监听。

也有办法能让 Vue 冒泡，但最好不要这样做。

### 多个 `class="xxx"` `:class="xxx"` Vue 会默认合并

只有 `class="xxx"` 和 `:style="xxx"` 才不会合并。

### 私有属性是给 Vue 作者用的

我们打印一个 Vue 实例，会看到很多下划线 _ 开头的属性，这些属性都是私有属性，是给 Vue 的作者用的，不要使用。

$ 开头的属性才是 Vue 作者专门给我们用的，$ 开头的我们就可以随便用了。

### .sync 修饰符

下面这两种写法完全等价。

```vue

<y-tabs :selected.sync="selectedTab"></y-tabs>
```

```vue

<y-tabs :selected="selectedTab" @update:selected="selectedTab = $event"></y-tabs>
```

`update:selected` 这一整个是事件名。

### 拿到一个元素的高度

首先在那个元素上设置一个 ref

然后 `this.$refs.toast.getBoundingClientRect().height` 就可以拿到这个元素的高度。

注意，`this.$refs.toast.style.height` 是拿不到元素的高度的。

```vue

<script>
export default {
  methods: {
    updateLineHeight() {
      // console.log(this.$refs.toast.style.height); 这样拿不到高度
      this.$nextTick(() => {
        // 别忘了加 px
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
      })
    },
  },
}
</script>
```

### Vue 里不要写 XML

所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。[Vue 模板语法](https://cn.vuejs.org/v2/guide/syntax.html#ad)

所以 Vue 会认为自定义标签默认是不自闭合的。

```vue
<!--正确写法-->
<y-button></y-button>

<!--容易出bug的写法-->
<y-button/>
```

### Vue v-model 双向绑定是一个语法糖

下面的代码，我们在 input 里面更改 message 的值，data 里面的 message 也会更改。

```vue

<template>
  <input type="text" v-model="message"/>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
    };
  },
};
</script>
```

而 Vue 的 v-model 双向绑定其实是一个语法糖

```vue
// 这种写法依旧可以实现 v-model 的效果
<template>
  <input type="text" :value="message" @input="message = $event.target.value"/>
  <p>{{ message }}</p>
  <button @click="message += 1"></button>
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
    };
  },
};
</script>
```

v-model 其实是这两代码的语法糖

- `:value="message"` 把 message 的值动态放到 input 标签里，
- `@input="message = $event.target.value"` 再在触发 @input 事件后把事件里面的值取出来赋值到 message。

### `$emit`

子组件可以使用 `$emit`,让父组件监听到自定义事件。

```vue
<!-- y-button.vue 子组件 -->
<button class="y-button" @click="$emit('click')">
<slot></slot>
<y-icon class="y-icon-right"
        :name="icon"></y-icon>
</button>
```

```vue
<!-- 调用了 y-button 的父组件 -->
<template>
  <y-button icon="settings" @click="test" icon-position="left"> 按钮</y-button>
</template>
```

当有地方在使用 y-button 组件时，如果在组件上添加了一个事件， 那 vue 不知道这个事件具体是作用在 y-button 组件里的哪个元素上的。

所以我们就在我们想要其作用到的 y-button 组件里的元素上，添加一个 `vm.$emit('eventName', [...args])`

官方文档讲得挺好的，看了就能懂了。[Vue $emit 官方文档](https://cn.vuejs.org/v2/api/#vm-emit)

### created 和 mounted 的区别

我们发现在父组件 created 生命周期里，打印 `this.$children` 出来是一个空数组，但是点击这个空数组，里面又是有元素的。

这是因为，父组件在我们打印`this.$children` 的时候，即 created 生命周期里，还没有儿子，在打印完之后才有的儿子。

所以表面上看着是个空数组，但是点开里面却又有元素。

如果是在 mounted 生命周期里，就能正常打印出 `this.$children` 这个数组。

由此，可以发现 created 和 mounted 就像下面这两个 DOM 操作一样，

1. created 像是
   `let div = document.createElement('div')`，在内存里将元素/组件等生成了，但还未挂载到页面上。
2. mounted 像是
   `document.body.appendChild(div)` ，将创建的元素/组件等挂载到页面上了。

**所以 created 是在内存里创建了元素/组件等，但还未放到页面里，mountd 是把元素/组件等放页面里了。**

那我们也可以测试一下父组件和子组件什么的创建顺序

```vue
<!--父组件-->
created() { console.log('father created'); }, mounted() { console.log('father
mounted'); }
```

```vue
<!-- 子组件-->
created() { console.log('son created'); }, mounted() { console.log('son
mounted'); }
```

```javascript
// 控制台打印的结果
// father created
// son created
// son mounted
// father mounted
```

- 可以看出父组件在内存中构建完成后，构建子组件；
- 子组件挂载到画面上之后，再去把父组件挂载到页面上。

父组件都 mounted 了，就说明子组件也都已经 mounted 了，那我们想在父组件里打印出 `this.$children` 就应该在 mounted 里面打印。

### `:style` 绑定内联样式

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。

[:style 绑定内联样式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F)

```vue
<!--col.vue-->
<div class="col"
     :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
     :class="[span && `col-${span}`, offset && `offset-${offset}`]">
<div style="border: 1px solid red;">
  <slot></slot>
</div>
</div>
```

`:style` 很好用，但是就是代码排布看着太不整洁干净了，而且易读性也较差。既然 `:style` 的值是一个对象，那我们就可以把这个对象放在 computed 里面，就会整洁易读很多。

```vue
<!--col.vue-->
<template>
  <div
      class="col"
      :style="colStyle"
      :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  >
    <div style="border: 1px solid red;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle: function () {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>
```

这种代码重构的方式叫做：**提取变量法** 。就是把我们想要简化的东西取个名字。下面的 `:class` 也能用得到这个方法。

### `:class` 绑定 HTML Class

我们可以传给 `v-bind:class` 一个对象或者一个数组，以动态地切换 class。

```vue

<div
    class="col"
    :style="colStyle"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
>
<slot></slot>
</div>
```

```vue

<template>
  <div class="col" :style="colStyle" :class="colClasses">
    <div style="border: 1px solid red;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClasses() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`,
      ];
    },
    colStyle: function () {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>
```

```vue
<!--  -->
<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-container",
  data() {
    return {
      // class 的值是一个对象
      containerClass: {
        // 为 true 时，classList 里面就会加上一个 hasAside
        hasAside: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      console.log(vm.$options.name);
      if (vm.$options.name === "y-aside") {
        this.containerClass.hasAside = true;
      }
    });
  },
};
</script>
```

### Vue 的渲染

- 一般的渲染

```javascript
var div = document.createElement("div"); // 生成
document.body.appendChild(div); // 挂载
```

上面的是同步的。

- Vue 的渲染不是同步的，Vue 是异步更新 DOM 的

```vue

```

### class 的对象写法

```html

<div class="y-wrapper" :class="{'error': error}">
    <input
            :value="value"
            class="y-input"
            :disabled="disabled"
            :readonly="readonly"
            type="text"
    />
</div>
```

`:class="{'error': error}"` 的意思是，如果 error 存在那么就有 error 类，反之则没有 error 类。

可以简写成 `:class="{error}"` 。

### Vue 动画

[进入/离开 & 列表过渡](https://cn.vuejs.org/v2/guide/transitions.html)

- 首先，在需要添加动画效果的元素/组件外包上 `<transition></transition>` 标签

```vue

<transition name="fade">
<div class="aside" v-if="visible">
  <slot></slot>
  <y-icon class="icon" name="settings" @click="hide"></y-icon>
</div>
</transition>
```

- 然后，再添加 CSS

```vue

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

### Vue 开发插件 install

- 将 $toast 挂到 Vue prototype 上去

```javascript
import Vue from "vue";

Vue.prototype.$toast = function () {
    console.log(1);
};
```

- 然后我们就可以在 Vue 实例中这样使用了

```javascript
this.$toast();
```

但直接这样改 prototype 好吗？

- 首先，有可能之前用户自己也加了 $toast ，那我们的就会将用户自己加的覆盖掉了，这样的做法**侵入性太强**，不太好。
- 也不应该直接 `import Vue from 'vue'` 因为我们不知道用户引入的是 vue2 还是 vue。
- 所以这种方法不行，还是要按官网教程专门写一个插件

[Vue 开发插件 install](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)

专门写一个插件

- 写一个 plugin.js 文件，直接暴露一个 install 函数

  install 函数有两个参数，第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。

  ```javascript
  export default {
    install(Vue, options) {
      Vue.prototype.$toast = function () {
        console.log("i am toast");
      };
    },
  };
  ```

  用户在需要用该插件的地方，import 并 Vue.use 这个插件 Vue.use 就会去执行 plugin 里面的 install
  函数。[API - Vue.use(plugin)](https://cn.vuejs.org/v2/api/#Vue-use)

  ```javascript
  import plugin from "./plugin";

  Vue.use(plugin);
  ```

​ 这样子就避免了上面的两个问题。

1. 是用户自己引入并使用插件的，所以不存在用户改了 prototype ，然后又用我们的 $toast 再覆盖了的情况。
2. 也不会存在 Vue 版本对不上，因为 plugin 里面的 Vue 参数是从 Vue.use(plugin) 传过来的，不需要我们自己去 import ，所以用户用的是什么版本的 Vue 我们用的也是什么版本的。

### Vue.extend(options)

使用基础 Vue 构造器，创建一个“子类”。

参数是一个包含组件选项的对象。

Vue.extend(options) 里面的 data 必须是一个函数

```vue
// data 必须是这种写法
var Profile = Vue.extend({
template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
data: function () {
return {
firstName: 'Walter',
lastName: 'White',
alias: 'Heisenberg'
}
}
})
```

### vm.$mount([elementOrSelector])

用于手动将未挂载的 Vue 实例挂载到文档中。

如果参数为空的话，模板将被渲染为文档之外的的元素，然后我们需要使用原生 DOM API 把它插入文档中。

这个方法返回实例自身，因而可以链式调用其它实例方法。

### vm.$el

Vue 实例使用的根 DOM 元素。

### 理解 plugin.js 文件

```javascript
import Toast from "./y-toast";

export default {
    // 开发插件 - Vue.js 插件应该暴露一个 install 函数
    install(Vue, options) {
        // 修改 Vue.prototype 添加一个 $toast
        // 接受一个 message 参数
        Vue.prototype.$toast = function (message) {
            // Vue.extend(options) 创建构造器 Constructor，用来创建子类
            let Constructor = Vue.extend(Toast);
            // 创建了一个 Toast 的子类 toast
            let toast = new Constructor();
            // 把 message 放到 toast 子类的 slot 组件里面去
            // vm.$slots.default 是一个数组，所以也需要传一个数组进去
            // 这一步必须要放到 toast.$mount() 的前面，
            // 否则会出现元素挂载上去了，但是里面没有 message
            toast.$slots.default = [message];
            // vm.$mount 手动挂载一个 DOM 到实例 vm 上去，
            // 不 mount 的话，所有生命周期的钩子都不会执行。
            toast.$mount();
            // 因为 toast.$mount() 里没有写 elementOrSelector 参数，
            // 所以需要用 DOM 操作再将 toast 子类里面的元素放到页面 body 里去。
            document.body.appendChild(toast.$el);
        };
    },
};
```

即每次我们 `this.$toast(message)` 就会创建了一个 Toast 的子类，并且把 message 放到子类的 slot 里面去，然后会再把这个子类的所有元素都放到 `this.$toast(message)`
所在的页面里面来。

这里面涉及一个知识点，就是如何用 JavaScript 来获取 vue 组件。[Vue 动态创建实例](https://zhuanlan.zhihu.com/p/38076208)

JavaScript 获取 DOM 的话就是那些原生 DOM 操作了。

### props

注意：如果 props 的 default 是一个对象，那需要用函数来返回这个对象的方式来写。

```vue

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default:
          true,
    },
    closeButton: {
      type: Object,
      // 如果你的 default 是一个对象的话，那你需要这样来写
      // 写一个函数来返回这个对象
      default: () => {
        return {
          text: "关闭",
          callback: (toast) => {
            toast.close();
          },
        };
      },
    },
  },
}
</script>
```

这是为什么呢？

在一个单文件组件里，export default {...} 导出的对象其实是一堆选项。

如果我们将 default 直接写成了对象，那页面里同时有两个该组件，且其中一个组件对 default 做了更改，另一个组件也会被影响到。这是因为对象是引用的，两个组件都引用的同一个对象，所以其中一个更改了，另一个也会受到影响。

以上，所以我们需要用 function 来为每一个组件 return 他们自己的一个对象。

### data 和 props 有什么区别？

如果需要传值的时候才用 props 。

props 是我们组件的的入参，传入参数。

而 data 是我们组件内部的数据，是组件自身维护的值。

如果把组件当成一个函数来理解，可以将 props 理解为需要传入的参数，而 data 就是函数作用域内声明的数据。

```javascript
function x(props) {
    let data1 = 1
    let data2 = props
}
```

组件自己最好不要改 props 的值，因为这是传进来的东西。

你可以声明一个内部 data ，然后你将 props 赋值到这个 data ，再自己去修改这个 data。

### Vue.nextTick([callback, context])

[ vue.nextTick() 与 setTimeout 的区别](https://blog.csdn.net/wei_dan1129/article/details/116269801)

[$nextTick VS setTimeout 看看它们的差异](https://www.php.cn/vuejs/479875.html)

- **nextTick** 相当于一个异步函数，在**下次 DOM 更新循环结束之后**执行延迟回调。
- nextTick 与 setTimeout 都是异步函数 不同的是 **nextTick 比 setTimeout 优先执行**。

## 测试

### 两种开发模式 BDD & TDD

- BDD：Behavior-Driven Development 行为驱动开发
- TDD：Test-Driven Development 测试驱动开发

Assert：断言，是编程术语，表示为一些布尔表达。

编写代码时，我们总是会做出一些假设，断言就是用于在 代码 中捕捉这些假设。

程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。 同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。

[chai.js](https://www.chaijs.com/) 就是一个断言库，能让我们能更方便地断言。

### 单元测试

用 chai.expect 来做断言

```javascript
// app.js
// 引入断言库 chai
import chai from "chai";

const expect = chai.expect;
// 单元测试
{
    // console.log(Button); // Button 是一个对象
    // 将 Button 这个对象构造成一个函数
    // 因为对象没法实例化出一个东西
    const Constructor = Vue.extend(Button);
    // console.log(Constructor); // Constructor 是一个函数
    // button 就是 Button 的实例
    let button = new Constructor({
        propsData: {
            icon: "settings",
        },
    });
    // 构造实例之后，再将实例挂载到某 DOM 元素上，也可以不挂载
    // 但如果是要用元素 style 的话，就需要挂载了，因为不渲染的话也拿不到 style
    button.$mount(); // 没有挂载
    let useElement = button.$el.querySelector("use");
    // console.log(useElement, 'useElement');
    // 我们断言了 useElement 的 xlink:href 属性等于 #icon-settings，
    // 断言结果为 true，控制台不会打印什么，即通过了测试，如果为 false，控制台会报错。
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#icon-settings");

    // 我们用 let button = new Constructor({...}) 输入了一个 button
    // 然后再输入 expect(...).to.eq(...) 断言来检验代码是否正确
    // 这就是一套单元测试的大的思路
}
```

使用 chai-spies 监听回调函数

```javascript
// app.js
// 单元测试 - 测试点击事件
{
    // mock 模拟
    const Constructor = Vue.extend(Button);
    let vm = new Constructor({
        propsData: {
            icon: "settings",
        },
    });
    vm.$mount();
    // mock 了一个函数，之后用的是这个模拟函数来做的测试
    let spy = chai.spy(function () {
        console.log(1);
        expect(1).to.eq(1);
    });
    // 为 vm 的点击事件添加监听函数 spy
    vm.$on("click", spy);
    let button = vm.$el;
    // 调用 spy 函数
    button.click();
    // 期待我们的间谍函数被调用
    expect(spy).to.have.been.called();
}
```

### 自动化测试

[老师的博客](https://xiedaimala.com/tasks/b6ed1d11-cf6a-44df-a019-1ff87c3afe60/text_tutorials/62be8c2e-0f09-4a08-8d2c-b23bb1fe1b22)

```shell
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```

```shell
# 在我们 npm run test 之前记住先删掉打包记录
 rm -rf .cache dist
```

### 如果有一步操作需要在参数里面加 "down"

否则会会默认所有操作都是同步的。

这是测试用例的普遍规定。

## npm parcel 等工具使用

### 打包发布 npm

先打包

```shell
npx parcel build index.js --no-cache
```

1. `npm adduser` 命令行在终端中登录 npm 帐号
2. 查看 package.json 中规定的入口文件是哪个？
    - package.json 中规定的入口文件即，main 字段的值；
    - 如果没有需要加上。该项目中最开始就没有；
    - 这个入口文件里要引入我们想要导出的组件并导出。
3. 检查 package.json 里面的项目名
4. 没有问题就可以用 `npm publish` 发布了。

### 打包之后就需要自己下载自己的包来试一下了

在同一个项目里，yarn 和 npm 不能混着用，会出 bug 。

### `this.$slots.default`

可以用 `this.$slots.default` 来判断 `<slot></slot>` 组件里有没有内容。

### import 是 ES6 的语法，node.js 暂时还不支持

我们需要将 import 用 Babel 转义一下。

1. 直接用 parcel 打包一下就行。别忘了加 `--no-minify` 和 `--no-cache` 。
   ```shell
   npx parcel build index.js --no-minify --no-cache
   ```
   不加 `--no-mimify` 的话，在 HTML 里写的 `<slot></slot>` 标签被删除了。 不加 `--no-cache` 的话，可能会被之前的缓存所影响。
2. 之后会在 dist 目录下，生成几个转义之后的文件。
3. 再到 package.json 里面去将 main 字段对应的值改成 dist/index.js 。

### 解决问题的关键是加快解决问题的效率

可能问题所有人都不知道怎么做，但你解决问题的效率足够高，那你就是最快解决的那个。

### `npm link`

我们每次代码写好后，都需要更新版本号并 `npm publish` 一次才能测试到最新的。

这样很麻烦，有别的方法吗？

1. 在 yellowUI 中运行

```shell
yarn link  # 或者 npm link
```

考虑到建议用户使用 yarn 所以我这里也使用 `yarn link`。

2. 然后到想要使用 yellowUI 的项目中，去运行

```shell
yarn add "yellow"
```

3. 我们再修改了 yellowUI 里面的代码的话，就只需要 `npx parcel build --no-cache --no-minify`
   然后在使用 yellowUI 的项目中就能拿到 yellowUI 里最新的代码了。

注意：该方法只能在本机上操作才能成功。

### 如何写 README.md

### parcel 起项目

```shell
npx parcel --no-cache index.html
```

一定不要忘了写入口文件，否则 parcel 会直接把 index.js 当成入口文件。

### 为什么单文件组件里面要写 name 呢？

- 是用来调试的。

我们在 chrome 中安装 vue.js devtools 这个拓展程序后， 我们就可以用组件的形式而不是用标签的形式来看页面。

而在这个拓展程序里面，显示的组件名就是我们写的 name。

- this.$children 数组里用来找到组件

this.#children 里的每一项的 $options 里面的 `__proto__` 里面的 name 。

## git

### git branch

创建一个名叫 branchName 的分支。（目前我在 main 分支里）

```gitexclude
git branch branchName
```

我们到目前为止提交的代码都会存一份到这个新的分支里面。（我们仍在 main 分支里）

如果我们这时候提交新代码，

```gitexclude
git add .
git commit -m 'add ...'
git push
```

这些代码将是提交推送到 main 分支里。

把本地分支推送到远程分支去：

```gitexclude
git push origin branchName:branchName
```

前一个 branchName 是本地分支名，后一个 branchName 是远程分支名。

切换分支：

```gitexclude
git checkout branchName
```

查看当前所在分支：

```gitexclude
git branch
```

查看 git 历史

```gitexclude
git log
```

使用 `git log` 或 `git log path/to/` 后， git 一直停留在 log 模式，这时只需要**按 q 键**即可退出 。

## Vuepress

### vue 组件展示在页面里

1. 在 docs/.vuepress/components 目录下，建立 .vue 文件

2. 在 .nd 文件里
```markdown
<ClientOnly>
<ybutton-demo></ybutton-demo>
</ClientOnly>
```

### 增加可执行文件

macOS 需要执行这句代码后才能执行 deploy.sh 文件

`chmod +x deploy.sh` 

直接在命令行中，输入

`./deploy.sh` 即可执行 deploy.sh 文件。
 
## 编程经验

### 功能实现后一定要对代码进行重构

比如我们写完下面的这些代码，实现了功能，解决了 bug

```vue

<script>
export default {
  methods: {
    appear(event) {
      console.log(this.$refs.triggerWrapper, "$refs.triggerWrapper")
      console.log(event.target, "event.target");
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log("下面")
        console.log(this.visible, "this.visible1");
        this.visible = !this.visible
        console.log(this.visible, "this.visible2");
        if (this.visible === true) {
          // 这里尝试用 $this.nextTick 来做，但不行，所以用的 setTimeout
          setTimeout(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            console.log("放到页面里了")
            console.log("新增 document 监听器")
            let documentClick = (e) => {
              if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
                console.log("我点击了弹出内容，弹出内容不关闭")
              } else {
                this.visible = false
                document.removeEventListener('click', documentClick)
                console.log("点击了弹出内容以外的部分，并关闭弹出内容")
              }
            }
            document.addEventListener("click", documentClick)
          })
        }
      } else {
        console.log("下面")
      }
    }
  },
}
</script>
```

但代码相当凌乱。我们需要

+ 删掉测试用的 console.log
+ 并删掉其他不必要的代码
+ 将负责某一具体功能的代码提取出来写成一个方法

然后我们就能得到下面的更加简洁，逻辑清晰，易读性更高的代码。

```vue

<script>
export default {
  methods: {
    // 定位 contentWrapper 出现的位置
    locate() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
    },

    // 监听 document 上的点击事件
    listenToDocument() {
      let documentClick = (e) => {
        if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
          this.visible = false
          document.removeEventListener('click', documentClick)
        }
      }
      document.addEventListener("click", documentClick)
    },

    visibleTrue() {
      // 这里尝试用 $this.nextTick 来做，但不行，所以用的 setTimeout
      setTimeout(() => {
        this.locate()
        this.listenToDocument()
      })
    },

    appear(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible
        if (this.visible === true) {
          this.visibleTrue()
        }
      }
    }
  },
}
</script>
```

甚至，如果你代码优化得足够好，你的每一个函数里只有一行代码。

对于一些特别注重面向对象的项目（UI 组件库）来说，这养的优化思路是不错的。

+ 我们可以把一个函数的函数体有没有超过 5 行作为一个优化的出发点，

+ 如果一个函数的函数体超过了 5 行，那就可以考虑对它进行优化。

### 好代码和坏代码

1. 坏代码：
    1. 写代码
    2. 不写测试
    3. 发现问题（已经写了不少）
    4. 加代码（不敢轻易删代码，因为要重新手动测试和担心删出问题）
    5. 然后又发现问题
    6. 又只能继续加代码
    7. ... ...
    8. 最后变成屎山
2. 好代码
    1. 写代码
    2. 写测试
    3. 出问题
    4. 继续回到第一步重写
    5. 能用测试来再次检查以确保不会出现很大的问题
    6. 如此循环往复，就不会出现屎山的情况了

小公司一般就是第一种坏代码，健思就是这样的。。。

### 「高内聚，低耦合」设计模式

比如说，如果有个方法很重要，就把它都整合内聚到一个方法里，

### 如果你眼睛观察到的和 JS 打印/执行出来的结果对不上，那很有可能就是异步的问题。

### 解决 bug 的思路

+ 按照报错提示去找问题
+ 用 **二分法** 定位 bug 所在具体代码
+ 打 log 并分析代码

### 写代码必走四步

1. 需求
2. UI
3. 代码
4. 测试

不确定前两步不要开始第三步。

### 框架的最主要的目的是：

让团队里的傻逼也写不出 bug 来，从而保证代码的质量。

比如说傻逼会去直接改 props ，为了防止他们做这样的事，所以就写了框架里面直接规定了你不能改 props ，你一旦改了就报错。

### 越是复杂的越要用单向数据流。

### 所有好用的 API 都是正交的，就是 API 都是独立的，低耦合的。

### 面向离职写代码

+ 写文档（离职后马上就能离开项目）
+ 被观察感
+ 在表现好并且他们还不给加薪的时候就走

### 通过删部分代码来熟悉代码和找bug是高效的

### 批量将 iconfont 加入购物车

```javascript
var span = document.querySelectorAll('.icon-cover');
for (var i = 0, len = span.length; i < len; i++) {
     console.log(span[i].querySelector('span').click());
}
```
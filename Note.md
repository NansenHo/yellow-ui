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

### CSS 动画

```css
/* icon.vue */
/* 声明一个叫 spin 的旋转动画*/
@keyframes spin {
	0% {
		transform: rotate(0deg)
		}
	100% {
		transform: rotate(360deg)
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

### 根据元素上某个属性的存在与否来选择元素

[CSS选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)

根据一个元素上的某个属性的存在来选择元素：

```css
/* y-input.vue */
.y-input[disabled] {
	border-color: #ccc;
	color: #ccc;
	cursor: not-allowed;
	}
```

### class 的对象写法

```html

<div class="y-wrapper"
	 :class="{'error': error}">
	<input :value="value"
		   class="y-input"
		   :disabled="disabled"
		   :readonly="readonly"
		   type="text">
</div>
```

`:class="{'error': error}"` 的意思是，如果 error 存在那么就有 error 类，反之则没有 error 类。

可以简写成 `:class="{error}"` 。

### 警告用户不要在 y-button 组件外包 div

```javascript
// y-button-group.vue
export default {
	mounted() {
		// 这里不能用 in
		// this.$children 只能拿到 VueComponent 而 this.$el 可以拿到原生元素
		for (let node of this.$el.children) {
			// String.prototype.toLowerCase() 将调用该方法的字符串值转为小写形式
			let name = node.nodeName.toLowerCase()
			if (name !== 'button') {
				console.warn(`y-button-group 的子元素只能是 y-button，但你写的是 ${name}`)
			}
		}
	}
}
```

## 测试

### 两种开发模式 BDD & TDD

+ BDD：Behavior-Driven Development 行为驱动开发
+ TDD：Test-Driven Development 测试驱动开发

Assert：断言，是编程术语，表示为一些布尔表达。

编写代码时，我们总是会做出一些假设，断言就是用于在 代码 中捕捉这些假设。

程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。 同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。

[chai.js](https://www.chaijs.com/) 就是一个断言库，能让我们能更方便地断言。

### 单元测试

用 chai.expect 来做断言

```javascript
// app.js
// 引入断言库 chai
import chai from 'chai';

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
				icon: 'settings',
			}
		}
	);
	// 构造实例之后，再将实例挂载到某 DOM 元素上，也可以不挂载
	// 但如果是要用元素 style 的话，就需要挂载了，因为不渲染的话也拿不到 style
	button.$mount(); // 没有挂载
	let useElement = button.$el.querySelector('use');
	// console.log(useElement, 'useElement');
	// 我们断言了 useElement 的 xlink:href 属性等于 #icon-settings，
	// 断言结果为 true，控制台不会打印什么，即通过了测试，如果为 false，控制台会报错。
	let href = useElement.getAttribute('xlink:href');
	expect(href).to.eq('#icon-settings');

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
				icon: 'settings',
			}
		}
	);
	vm.$mount();
	// mock 了一个函数，之后用的是这个模拟函数来做的测试
	let spy = chai.spy(function () {
		console.log(1);
		expect(1).to.eq(1);
	})
	// 为 vm 的点击事件添加监听函数 spy
	vm.$on('click', spy);
	let button = vm.$el;
	// 调用 spy 函数
	button.click();
	// 期待我们的间谍函数被调用
	expect(spy).to.have.been.called()
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

### 打包发布 npm

1. `npm adduser` 命令行在终端中登录 npm 帐号
2. 查看 package.json 中规定的入口文件是哪个？
    + package.json 中规定的入口文件即，main 字段的值；
    + 如果没有需要加上。该项目中最开始就没有；
    + 这个入口文件里要引入我们想要导出的组件并导出。
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

是用来调试的。

我们在 chrome 中安装 vue.js devtools 这个拓展程序后， 我们就可以用组件的形式而不是用标签的形式来看页面。

而在这个拓展程序里面，显示的组件名就是我们写的 name。

## Vue

### Vue 里不要写 XML

所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。[Vue 模板语法](https://cn.vuejs.org/v2/guide/syntax.html#ad)

所以 Vue 会认为自定义标签默认是不自闭合的。

```vue
<!--正确写法-->
<y-button></y-button>

<!--容易出bug的写法-->
<y-button />
```

### Vue v-model 双向绑定是一个语法糖

下面的代码，我们在 input 里面更改 message 的值，data 里面的 message 也会更改。

```vue

<template>
  <input type="text"
         v-model="message">
  <p>{{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    }
  }
}
</script>
```

而 Vue 的 v-model 双向绑定其实是一个语法糖

```vue
// 这种写法依旧可以实现 v-model 的效果
<template>
  <input type="text"
         :value="message"
         @input="message = $event.target.value">
  <p>{{ message }}</p>
  <button @click="message += 1"></button>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    }
  }
}
</script>
```

v-model 其实是这两代码的语法糖

+ `:value="message"` 把 message 的值动态放到 input 标签里，
+ `@input="message = $event.target.value"` 再在触发 @input 事件后把事件里面的值取出来赋值到 message。

### `$emit`

子组件可以使用 `$emit`,让父组件监听到自定义事件。

```vue
<!-- y-button.vue 子组件 -->
<button class="y-button"
        @click="$emit('click')">
<slot></slot>
<y-icon class="y-icon-right"
        :name="icon"></y-icon>
</button>
```

```vue
<!-- 调用了 y-button 的父组件 -->
<template>
  <y-button icon="settings"
            @click="test"
            icon-position="left">
    按钮
  </y-button>
</template>
```

当有地方在使用 y-button 组件时，如果在组件上添加了一个事件， 那 vue 不知道这个事件具体是作用在 y-button 组件里的哪个元素上的。

所以我们就在我们想要其作用到的 y-button 组件里的元素上，添加一个 `vm.$emit('eventName', [...args])` 

官方文档讲得挺好的，看了就能懂了。[Vue $emit 官方文档](https://cn.vuejs.org/v2/api/#vm-emit)

## git

### git branch

创建一个名叫 branchName 的分支。

```gitexclude
git branch branchName
```


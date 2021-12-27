#

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

### 两种开发模式 BDD & TDD

+ BDD：Behavior-Driven Development 行为驱动开发
+ TDD：Test-Driven Development 测试驱动开发

Assert：断言，是编程术语，表示为一些布尔表达。

编写代码时，我们总是会做出一些假设，断言就是用于在 代码 中捕捉这些假设。

程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。 同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。

[chai.js](https://www.chaijs.com/) 就是一个断言库，能让我们能更方便地断言。

### 单元测试

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

### `$emit`

子组件可以使用 $emit,让父组件监听到自定义事件

### 
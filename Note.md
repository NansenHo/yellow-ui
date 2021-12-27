#

### CSS 动画

```css
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
+ BDD：Behavior-Driven Development
  行为驱动开发
+ TDD：Test-Driven Development
  测试驱动开发

Assert：断言，是编程术语，表示为一些布尔表达。

编写代码时，我们总是会做出一些假设，断言就是用于在 代码 中捕捉这些假设。

程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。 同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。 

chai.js 就是一个断言库，能让我们能更方便地断言。
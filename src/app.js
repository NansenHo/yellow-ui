import Vue from 'vue';
import Button from './y-button.vue';
import Icon from './y-icon.vue';
import ButtonGroup from './y-button-group';

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);

new Vue({
	el: '#app',
	methods: {
		test() {
			console.log('1');
		}
	},
});

// // 单元测试
// import chai from 'chai';
// import spies from 'chai-spies';
//
// chai.use(spies);
//
// const expect = chai.expect;
// // 单元测试 - 测试 icon 属性
// {
// 	const Constructor = Vue.extend(Button);
// 	let vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 			}
// 		}
// 	);
// 	vm.$mount();
// 	let useElement = vm.$el.querySelector('use');
// 	let href = useElement.getAttribute('xlink:href');
// 	expect(href).to.eq('#icon-settings');
// }
//
// // 单元测试 - 测试 icon-position 属性
// {
// 	const div = document.createElement('div');
// 	document.body.appendChild(div);
// 	const Constructor = Vue.extend(Button);
// 	let vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 				iconPosition: 'right'
// 			}
// 		}
// 	);
// 	vm.$mount(div);
// 	let svgElement = vm.$el.querySelector('svg');
// 	let classList = Array.from(svgElement.classList);
// 	let iconRight = classList.find((item) => {
// 		return item === 'y-icon-right';
// 	});
// 	expect(iconRight).to.eq('y-icon-right');
// 	// 清理掉 div 避免画面上杂乱
// 	vm.$el.remove();
// 	vm.$destroy();
// }
//
// // 单元测试 - 测试点击事件
// {
// 	// mock 模拟
// 	const Constructor = Vue.extend(Button);
// 	let vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 			}
// 		}
// 	);
// 	vm.$mount();
// 	// mock 了一个函数，之后用的是这个模拟函数来做的测试
// 	let spy = chai.spy(function () {
// 		console.log(1);
// 		expect(1).to.eq(1);
// 	});
// 	// 为 vm 的点击事件添加监听函数 spy
// 	vm.$on('click', spy);
// 	let button = vm.$el;
// 	// 调用 spy 函数
// 	button.click();
// 	// 期待我们的间谍函数被调用
// 	expect(spy).to.have.been.called();
// }
import Vue from 'vue';
import Button from './y-button.vue';
import Icon from './y-icon.vue';
import ButtonGroup from './y-button-group';

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);

new Vue({
	el: '#app',
	data: {
		loading1: false,
	},
	methods: {
		test() {
			console.log('1');
		}
	},
});

// 单元测试
import chai from 'chai';

const expect = chai.expect;
// 单元测试 - 测试 icon 属性
{
	const Constructor = Vue.extend(Button);
	let vm = new Constructor({
			propsData: {
				icon: 'settings',
			}
		}
	);
	vm.$mount();
	let useElement = vm.$el.querySelector('use');
	let href = useElement.getAttribute('xlink:href');
	expect(href).to.eq('#icon-settings');
}

// 单元测试 - 测试 icon-position 属性
{
	const div = document.createElement('div');
	document.body.appendChild(div);
	const Constructor = Vue.extend(Button);
	let vm = new Constructor({
			propsData: {
				icon: 'settings',
				iconPosition: 'right'
			}
		}
	);
	vm.$mount(div);
	let svgElement = vm.$el.querySelector('svg');
	// console.log(svgElement.classList, 'classList'); // 有 y-icon-right
	// window.getComputedStyle(svgElement)
	let classList = Array.from(svgElement.classList);
	let iconRight = classList.find((item) => {
		return item === 'y-icon-right';
	});
	expect(iconRight).to.eq('y-icon-right');
	// 清理掉 div 避免画面上杂乱
	vm.$el.remove();
	vm.$destroy();
}

// 单元测试 -
{
	const Constructor = Vue.extend(Button);
	let vm = new Constructor({
			propsData: {
				icon: 'settings',
			}
		}
	);
	vm.$mount();
	// 监听 vm
	vm.$on('click', function () {
		// 只要打印出了 1 或者控制台没有报错，都说明运行了该函数
		console.log(1);
		expect(1).to.eq(1);
	});
	let button = vm.$el;
	button.click();
}
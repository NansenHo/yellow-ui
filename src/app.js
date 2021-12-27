import Vue from 'vue';
import Button from './y-button.vue';
import Icon from './icon.vue';
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

import chai from 'chai';

const expect = chai.expect;
// 单元测试
{
	const Constructor = Vue.extend(Button);
	let button = new Constructor({
			propsData: {
				icon: 'settings',
			}
		}
	);
	button.$mount('');
	let useElement = button.$el.querySelector('use');
	let href = useElement.getAttribute('xlink:href');
	expect(href).to.eq('#icon-settings');
}
const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/y-button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
	it('存在.', () => {
		expect(Button).to.be.ok
	})
	it('可以设置icon.', () => {
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: 'settings'
			}
		}).$mount()
		const useElement = vm.$el.querySelector('use')
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
		vm.$destroy()
	})
	it('设置 iconPosition 可以改变 order', () => {
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
				iconPosition: 'right'
			}
		}).$mount(div)
		let svgElement = vm.$el.querySelector('svg');
		// console.log(svgElement.classList, 'classList'); // 有 y-icon-right
		// window.getComputedStyle(svgElement)
		let classList = Array.from(svgElement.classList);
		let iconRight = classList.find((item) => {
			return item === 'y-icon-right';
		});
		expect(iconRight).to.eq('y-icon-right');
		vm.$el.remove()
		vm.$destroy()
	})
	it('点击 button 触发 click 事件', () => {
		const Constructor = Vue.extend(Button)
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
			}
		}).$mount()
		const callback = sinon.fake();
		vm.$on('click', callback)
		vm.$el.click()
		expect(callback).to.have.been.called

	})
})
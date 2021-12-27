import Vue from 'vue';
import Button from './y-button.vue'
import Icon from './icon.vue'
import ButtonGroup from './y-button-group'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
    }
});
import Vue from 'vue';
import Button from './y-button.vue'
import Icon from './icon.vue'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)

new Vue({
    el: '#app',
});
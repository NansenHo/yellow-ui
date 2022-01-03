import Toast from "./y-toast";
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      // Vue.extend(options) 创建构造器 Constructor
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor();
      // vm.$slots.default 是一个数组
      toast.$slots.default = [message];
      // vm.$mount 手动挂载一个 DOM 到实例 vm 上去，
      // 不 mount 的话，所有生命周期的钩子都不会执行。
      toast.$mount();
      // 然后将 DOM 放到页面 body 里去
      document.body.appendChild(toast.$el);
    };
  },
};

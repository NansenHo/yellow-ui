import Toast from "./y-toast";

let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null;
        },
      });
    };
  },
};

// 帮助函数
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    // propsData: propsData, //简写成下面
    propsData,
  });
  toast.$slots.default = [message];
  toast.$on("close", onClose);
  toast.$mount();
  document.body.appendChild(toast.$el);
  return toast;
}

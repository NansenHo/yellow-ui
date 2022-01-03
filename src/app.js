import Vue from "vue";
import Button from "./y-button.vue";
import Icon from "./y-icon.vue";
import ButtonGroup from "./y-button-group";
import Input from "./y-input";
import Row from "./y-row";
import Col from "./y-col";
import Container from "./y-container";
import Aside from "./y-aside";
import Header from "./y-header";
import Content from "./y-content";
import Footer from "./y-footer";
import Toast from "./y-toast";
import plugin from "./plugin";

Vue.component("y-button", Button);
Vue.component("y-icon", Icon);
Vue.component("y-button-group", ButtonGroup);
Vue.component("y-input", Input);
Vue.component("y-row", Row);
Vue.component("y-col", Col);
Vue.component("y-aside", Aside);
Vue.component("y-toast", Toast);
Vue.use(plugin); // use 会去执行 plugin 里面的 install 函数

new Vue({
  el: "#app",
  data: {
    message: "hello",
  },
  mounted() {
    this.$toast("<strong>xxxxx", {
      enableHtml: false,
    });
  },
  methods: {
    test() {
      console.log("1");
    },
    showToast() {},
  },
  components: {
    "y-container": Container,
    "y-header": Header,
    "y-content": Content,
    "y-footer": Footer,
  },
});

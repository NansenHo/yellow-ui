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
import Tabs from "./y-tabs";
import TabsBody from "./y-tabs-body";
import TabsNav from "./y-tabs-nav";
import TabsItem from "./y-tabs-item";
import TabsPane from "./y-tabs-pane";
import Popover from "./y-popover";
import Collapse from "./y-collapse"
import CollapseItem from "./y-collapse-item";

Vue.component("y-button", Button);
Vue.component("y-icon", Icon);
Vue.component("y-button-group", ButtonGroup);
Vue.component("y-input", Input);
Vue.component("y-row", Row);
Vue.component("y-col", Col);
Vue.component("y-aside", Aside);
Vue.component("y-toast", Toast);
Vue.component("y-tabs", Tabs)
Vue.component('y-tabs-body', TabsBody)
Vue.component('y-tabs-nav', TabsNav)
Vue.component('y-tabs-item', TabsItem)
Vue.component('y-tabs-pane', TabsPane)
Vue.component('y-popover', Popover)
Vue.component('y-collapse', Collapse)
Vue.component('y-collapse-item', CollapseItem)
Vue.use(plugin); // use 会去执行 plugin 里面的 install 函数

new Vue({
    el: "#app",
    data: {
        message: "hello",
        selectedTab: ["2", "1"],
        selected: "world"
    },
    mounted() {
    },
    methods: {
        test() {
            console.log("1");
        },
        showToast() {
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}`, {
                enableHtml: false,
                position: "middle",
                closeButton: {
                    text: "已充值",
                    callback() {
                        console.log(1);
                    },
                },
            });
        },
    },
    components: {
        "y-container": Container,
        "y-header": Header,
        "y-content": Content,
        "y-footer": Footer,
    },
});

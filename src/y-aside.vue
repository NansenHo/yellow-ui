<!--  -->
<template>
  <!-- <transition name="fade"> -->
  <div class="aside" v-if="visible">
    <slot></slot>
    <!-- <y-icon class="icon" name="settings" @click="hide"></y-icon> -->
  </div>
  <!-- </transition> -->
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Icon from "./y-icon.vue";
export default {
  name: "y-aside",
  //import引入的组件需要注入到对象中才能使用
  components: {
    "y-icon": Icon,
  },
  data() {
    //这里存放数据
    return {
      visible: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  //方法集合
  methods: {
    // hide() {
    //   this.visible = false;
    // },
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.aside {
  position: relative;

  // > .icon {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  // }
}

// .fade-enter-active, .fade-leave-active {
//   transition: all .5s;
// }
// .fade-enter, .fade-leave-to {
//   margin-left: -200px;
// }
</style>
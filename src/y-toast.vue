<!--  -->
<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "y-toast",
  components: {},
  data() {
    //这里存放数据
    return {};
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
  methods: {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$font-size: 14px;
$height: 40px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  height: $height;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  padding: 14px 26px 14px 13px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
  overflow: hidden;
  width: 330px;
}
</style>
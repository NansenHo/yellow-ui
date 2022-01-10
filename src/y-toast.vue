<!--  -->
<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="closeBox">
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClose()">{{
          closeButton.text
        }}</span>
      </div>
    </div>
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
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    closeButton: {
      type: Object,
      // 如果你的 default 是一个对象的话，那你需要这样来写
      // 写一个函数来返回这个对象
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  //监听属性 类似于data概念
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.updateLineHeight();
    this.handleAutoClose();
  },
  //方法集合
  methods: {
    updateLineHeight() {
      // console.log(this.$refs.toast.style.height); //这样拿不到高度
      this.$nextTick(() => {
        // console.log(this.$refs.line, "this.$refs");
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    handleAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, 5000);
      }
    },
    close() {
      // this.$el 能访问到 Vue 实例使用的根 DOM 元素。
      this.$el.remove();
      this.$emit("close");
      // 会把挂在DOM元素上的事件也取消。完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
      this.$destroy();
    },
    onClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$font-size: 14px;
$height: 40px;

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// 负责居中
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
  }

  &.position-bottom {
    bottom: 0;
  }

  &.position-middle {
    top: 50%;
    // 重置 wrapper 的 transform
    transform: translateX(-50%) translateY(-50%);
  }
}

.toast {
  animation: fade 1s;
  color: #606266;
  font-size: $font-size;
  min-height: $height;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  //   padding: 14px 26px 14px 13px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 330px;
  justify-content: space-between;

  > .message {
    padding: 14px 0 14px 16px;
  }

  > .closeBox {
    display: flex;
    align-items: center;

    > .line {
      border-left: 1px solid #abb2c4;
      margin-left: 16px;
    }

    > .close {
      padding: 0 20px 0 20px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
}
</style>

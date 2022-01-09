<template>
  <div class="popover" @click="appear" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" :style="popoverWidth" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="span">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "y-popover",
  data() {
    return {
      visible: false,
      popoverWidth: {
        width: this.width + 'px',
      }
    }
  },
  props: {
    width: {
      type: [Number, String],
      default: "200",
    }
  },
  methods: {
    // 定位 contentWrapper 出现的位置
    locate() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
    },

    // 监听 document 上的点击事件
    listenToDocument() {
      let documentClick = (e) => {
        if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
          this.visible = false
          document.removeEventListener('click', documentClick)
        }
      }
      document.addEventListener("click", documentClick)
    },

    visibleTrue() {
      // 这里尝试用 $this.nextTick 来做，但不行，所以用的 setTimeout
      setTimeout(() => {
        this.locate()
        this.listenToDocument()
      })
    },

    appear(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible
        if (this.visible === true) {
          this.visibleTrue()
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-flex;
  vertical-align: top;
  position: relative;
}

// 用 border 和 :before & :after 来实现一个对话框
.content-wrapper {
  position: absolute;
  max-width: 200px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 18px 20px;
  background: #fff;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;
  width: 200px;
  transform: translateY(-100%);
  margin-top: -10px;

  &::before, &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 10px;
  }

  &:before {
    border-top-color: #ebeef5;
  }

  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}

.span {
  display: inline-block;
}
</style>
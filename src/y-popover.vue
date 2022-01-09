<template>
  <div class="popover" @click="appear" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         :style="popoverWidth" v-if="visible"
         :class="{[`position-${position}`]: true}">
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
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ['top', 'right', "bottom", "left"].indexOf(value) >= 0
      }
    }
  },
  methods: {
    // 定位 contentWrapper 出现的位置
    locate() {
      let {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      let {height, top, left, width} = triggerWrapper.getBoundingClientRect()
      let {height: height_contentWrapper} = contentWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
        contentWrapper.style.left = left + window.scrollX + 'px';
        contentWrapper.style.top = top + window.scrollY + 'px';
      } else if (this.position === "bottom") {
        contentWrapper.style.left = left + window.scrollX + 'px';
        contentWrapper.style.top = top + height + window.scrollY + 'px';
      } else if (this.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px';
        contentWrapper.style.top = top + window.scrollY + (height - height_contentWrapper) / 2 + 'px';
      } else if (this.position === "right") {
        contentWrapper.style.left = left + window.scrollX + width + 'px';
        contentWrapper.style.top = top + window.scrollY + (height - height_contentWrapper) / 2 + 'px';
      }
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

  &::before, &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      left: 10px;
    }

    &:before {
      border-top-color: #ebeef5;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &:before {
      border-bottom-color: #ebeef5;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      border-left-color: #ebeef5;
    }

    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      border-right-color: #ebeef5;
    }

    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }


}

.span {
  display: inline-block;
}
</style>
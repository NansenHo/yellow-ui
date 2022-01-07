<template>
  <div class="popover" @click="appear" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
    }
  },
  mounted() {
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

.content-wrapper {
  position: absolute;
  border: 1px solid #ebeef5;
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
}
</style>
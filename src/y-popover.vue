<template>
  <div class="popover" @click.stop="appear">
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
    console.log(this.$refs.triggerWrapper)
  },
  methods: {
    appear() {
      this.visible = !this.visible
      console.log("visible changed")
      if (this.visible === true) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log(top, left, "top, left")
          // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
          console.log("新增 document 监听器")
          let documentClick = () => {
            this.visible = false
            console.log("删除一个节点")
            console.log("document 隐藏")
            document.removeEventListener('click', documentClick)
            console.log("click body")
          }
          document.addEventListener("click", documentClick)
        })
      } else {
        console.log("按钮 隐藏")
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
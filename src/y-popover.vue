<template>
  <div class="popover" @click="appear">
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
    appear(event) {
      console.log(this.$refs.triggerWrapper, "$refs.triggerWrapper")
      console.log(event.target, "event.target");
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log("下面")
        console.log(this.visible, "this.visible1");
        this.visible = !this.visible
        console.log(this.visible, "this.visible2");
        if (this.visible === true) {
          // 这里尝试用 $this.nextTick 来做，但不行，所以用的 setTimeout
          setTimeout(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            console.log("放到页面里了")
            console.log("新增 document 监听器")
            let documentClick = (e) => {
              if (this.$refs.contentWrapper.contains(e.target)) {
                console.log("我点击了弹出内容，弹出内容不关闭")
              } else {
                this.visible = false
                document.removeEventListener('click', documentClick)
                console.log("点击了弹出内容以外的部分，并关闭弹出内容")
              }
            }
            document.addEventListener("click", documentClick)
          })
        }
      } else {
        console.log("下面")
      }

      // this.visible = !this.visible
      // console.log("visible changed")
      // if (this.visible === true) {
      //   // 这里尝试用 $this.nextTick 来做，但不行，所以用的 setTimeout
      //   setTimeout(() => {
      //     document.body.appendChild(this.$refs.contentWrapper)
      //     let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      //     // 加上 window.scrollX/Y 解决横纵轴上有轮动条时，定位不准问题。
      //     this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      //     this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      //     console.log("新增 document 监听器")
      //     let documentClick = () => {
      //       this.visible = false
      //       console.log("删除一个节点")
      //       console.log("document 隐藏")
      //       document.removeEventListener('click', documentClick)
      //       console.log("关闭")
      //     }
      //     document.addEventListener("click", documentClick)
      //   })
      // } else {
      //   console.log("关闭")
      // }
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
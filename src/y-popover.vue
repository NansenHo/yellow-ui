<template>
  <div class="popover" @click="appear">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  methods: {
    appear() {
      this.visible = !this.visible
      console.log("visible changed")
      if (this.visible === true) {
        this.$nextTick(() => {
          document.addEventListener("click", () => {
            this.visible = false
            console.log("click body")
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-flex;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
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
  }
}
</style>
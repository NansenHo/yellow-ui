<template>
  <div class="yCollapseItem">
    <div class="yCollapseItemTitle" @click="visibleTrue">
      {{ title }}
      <y-icon name="settings"></y-icon>
    </div>
    <div class="yCollapseItemContent" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-collapse-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      visible: false,
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      console.log(name, "name")
      if (name !== this.name) {
        this.close()
      } else {
        this.show()
      }
    })
  },
  methods: {
    close() {
      this.visible = false
    },

    show(){
      this.visible = true
    },

    visibleTrue() {
      if (this.visible) {
        this.visible = false
      } else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
        console.log(this.name, "this.name");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yCollapseItem {
  > .yCollapseItemTitle {
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: none;
  }

  > .yCollapseItemContent {
    border-bottom: 1px solid #ebeef5;
    will-change: height;
    background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 1.7692307692;
  }
}
</style>
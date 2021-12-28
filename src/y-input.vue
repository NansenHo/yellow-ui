<template>
  <div class="y-wrapper"
       :class="{'error': error}">
    <input :value="value"
           class="y-input"
           :disabled="disabled"
           :readonly="readonly"
           type="text">
  </div>
</template>

<script>
export default {
  name: 'y-input',
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    }
  }
};
</script>

<style lang="scss"
       scoped>
$box-shadow-color: rgba(0, 0, 0, 0.5);
$border-color: #dcdfe6;
$color: #606266;
.y-wrapper {
  > .y-input {
    border: 1px solid $border-color;
    color: $color;
    line-height: 40px;
    height: 40px;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    padding: 0 15px;
    cursor: pointer;
    display: inline-block;

    &:hover {
      border: 1px solid var(--border-color-hover);
      //box-shadow: inset 0 1px 3px $box-shadow-color;
    }

    &:focus {
      //box-shadow: inset 0 1px 3px $box-shadow-color;
    }

    &[disabled] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  &.error {
    > .input {
      border: 1px solid red ;
    }
  }
}
</style>
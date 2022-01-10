<template>
  <div class="y-wrapper"
       :class="{warn}">
    <input :value="value"
           class="y-input"
           :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           type="text">
    <template v-if="warn">
      <y-icon name="error" class="warn-icon"></y-icon>
      <span class="warn-message">{{ warn }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './y-icon';

export default {
  name: 'y-input',
  components: {
    'y-icon': Icon
  },
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
    warn: {
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
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 0.5em;
  }

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
      border: 1px solid #666;
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

  &.warn {
    > .input {
      border: 1px solid red;
    }
  }

  > .warn-icon {
    fill: #f56c6c;
  }

  > .warn-message {
    color: #f56c6c;
  }
}
</style>
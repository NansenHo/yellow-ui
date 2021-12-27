<template>
  <svg v-if="name === 'loading'" class="y-icon y-icon-loading" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
  <svg v-else class="y-icon" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>

<script>
export default {
  name: 'y-icon',
  props: ['name',],
};
</script>

<style lang="scss" scoped>
.y-icon {
  width: 18px;
  height: 18px;
  color: var(--button-color);
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.y-icon-loading {
  animation: spin 1s infinite linear;
}
</style>
<template>
  <svg class="y-icon y-icon-right" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>

<script>
export default {
  name: 'y-icon',
  props: ['name']
};
</script>

<style lang="scss" scoped>
.y-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.y-icon-left {
  margin-right: 0.5em;
  margin-left: 0;
}

.y-icon-right {
  margin-right: 0;
  margin-left: 0.5em;
}
</style>
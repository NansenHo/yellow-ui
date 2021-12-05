<template>
  <button class="y-button">按钮</button>
</template>

<script>
export default {
  name: 'y-button',
};
</script>

<style scoped lang="scss">
.y-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 2em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
}

.y-button:hover {
  background-color: var(--button-active-bg);
}

.y-button:active {
  background-color: var(--button-active-bg);
}

.y-button:focus {
  outline: none;
}
</style>
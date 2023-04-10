<template>
  <div :class="$style.spinner">Loading...</div>
</template>

<style module>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 30px;
}
</style>

<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in total"
      :key="`indicator-${index}`"
      @click="$emit('switch', index)"
    />
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateY(-50%);
  left: 50%;
  bottom: 1em;
  z-index: 2;
}
.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background: #fff;
  margin: 0.2em;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
bgAudio();
function bgAudio() {
  const bg = new Audio('audio/background.wav');
  addEventListener('load', () => {
    bg.play();
    bg.loop = true;
  });
}
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

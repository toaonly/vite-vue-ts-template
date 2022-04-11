<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div class="text-center">
    <div class="logo" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<style lang="scss" scoped>
div.logo {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-image: url('/assets/logo.png');
  animation: rotation infinite 2s cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>

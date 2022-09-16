<template>
  <div class="text-center">
    About Page
    <br>
    <button @click="back">
      Back
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
button {
  @apply py-2 px-4;
  @apply capitalize;
  @apply bg-gray-800 dark:bg-stone-100;
  @apply rounded-md;
  @apply text-stone-100 dark:text-gray-800;
}
</style>
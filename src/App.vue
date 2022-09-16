<template>
  <div class="text-center py-4">
    <router-link
      active-class="text-teal-600 font-bold"
      to="/"
    >
      Home
    </router-link>|
    <router-link
      active-class="text-teal-600 font-bold"
      to="/about"
    >
      About
    </router-link>
  </div>
  <router-view />
</template>

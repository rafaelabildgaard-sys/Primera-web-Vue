<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
.app-shell {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

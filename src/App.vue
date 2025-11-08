<script setup>
import AppNavbar from './components/header/AppNavbar.vue'
import AppFooter from './components/footer/AppFooter.vue'
</script>

<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<style>

section {
  margin-top: 100px; /* ajusta se quiseres mais/menos espaço */
}
</style>

@media (max-width: 600px) {
  section {
    margin-top: 80px;
  }
}


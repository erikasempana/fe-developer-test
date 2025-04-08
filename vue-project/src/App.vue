<template>
  <div class="container">
    <h1>Shirt Stock Viewer 👕</h1>
    <ShirtStock />
    <hr />
    <DependentDropdown />
  </div>
</template>

<script setup>
import ShirtStock from './components/ShirtStock.vue'
import DependentDropdown from './components/DependentDropdown.vue'
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: sans-serif;
  padding: 1rem;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
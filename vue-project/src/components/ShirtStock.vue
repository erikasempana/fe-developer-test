<template>
  <div>
    <h2>Available Shirts</h2>
    <ul>
      <li v-for="(shirt, sIndex) in shirts" :key="sIndex">
        <div v-for="(item, iIndex) in shirt.items" :key="iIndex">
          <div v-for="(variant, vIndex) in item.variant" :key="vIndex">
            <strong>{{ shirt.title }}</strong> - Size: {{ item.size }}, Color: {{ variant.color }},
            <span :style="{ color: variant.stock > 0 ? 'green' : 'red' }">
              {{ variant.stock > 0 ? variant.stock + ' in stock' : 'Out of Stock' }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const shirts = ref([
  {
    title: 'Shirt A',
    items: [
      {
        size: 'L',
        variant: [
          { color: 'Red', stock: 10 },
          { color: 'Black' }
        ]
      }
    ]
  },
  {
    title: 'Shirt B',
    items: [
      {
        size: 'L',
        variant: [
          { color: 'Green' },
          { color: 'White', stock: 20 }
        ]
      },
      {
        size: 'M',
        variant: [
          { color: 'Yellow', stock: 5 },
          { color: 'White', stock: 8 }
        ]
      }
    ]
  }
])
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f8f8f8;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}
</style>
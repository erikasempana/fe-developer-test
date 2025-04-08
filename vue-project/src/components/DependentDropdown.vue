<template>
  <div>
    <h2>Shirt Selector</h2>

    <div class="dropdown">
      <label>Shirt Name:</label>
      <select v-model="selectedName">
        <option disabled value="">-- Select Shirt --</option>
        <option v-for="shirt in shirts" :key="shirt.title" :value="shirt.title">
          {{ shirt.title }}
        </option>
      </select>
    </div>

    <div class="dropdown" v-if="selectedName">
      <label>Size:</label>
      <select v-model="selectedSize">
        <option disabled value="">-- Select Size --</option>
        <option
          v-for="item in availableItems"
          :key="item.size"
          :value="item.size"
        >
          {{ item.size }}
        </option>
      </select>
    </div>

    <div class="dropdown" v-if="selectedSize">
      <label>Color:</label>
      <select v-model="selectedColor">
        <option disabled value="">-- Select Color --</option>
        <option
          v-for="variant in availableVariants"
          :key="variant.color"
          :value="variant.color"
        >
          {{ variant.color }}
        </option>
      </select>
    </div>

    <div class="result" v-if="selectedColor">
      <p>
        Stock:
        <strong :style="{ color: selectedStock > 0 ? 'green' : 'red' }">
          {{ selectedStock > 0 ? selectedStock : 'Out of Stock' }}
        </strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const selectedName = ref('')
const selectedSize = ref('')
const selectedColor = ref('')

const selectedShirt = computed(() => shirts.value.find(s => s.title === selectedName.value))
const availableItems = computed(() => selectedShirt.value?.items || [])
const selectedItem = computed(() => availableItems.value.find(i => i.size === selectedSize.value))
const availableVariants = computed(() => selectedItem.value?.variant || [])
const selectedVariant = computed(() => availableVariants.value.find(v => v.color === selectedColor.value))
const selectedStock = computed(() => selectedVariant.value?.stock ?? 0)
</script>

<style scoped>
.dropdown {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.25rem;
}
select {
  padding: 0.5rem;
  width: 100%;
}
.result {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
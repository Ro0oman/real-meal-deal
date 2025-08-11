<template>
  <div class="category-selector">
    <label for="category">Select Category:</label>
    <select id="category" @change="onChange" :value="selectedCategory">
      <option disabled value="">-- Choose a category --</option>
      <option v-for="cat in categories" :key="cat.strCategory" :value="cat.strCategory">
        {{ cat.strCategory }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selectedCategory: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select'])

function onChange(event) {
  emit('select', event.target.value)
}
</script>

<template>
  <div
    class="category-buttons"
    :class="{ 'no-selection': !selectedCategory }"
  >
    <button
      v-for="cat in categories"
      :key="cat.strCategory"
      @click="selectCategory(cat.strCategory)"
      :class="{ selected: cat.strCategory === selectedCategory }"
      class="category-btn"
      type="button"
    >
      <span class="icon">{{ categoryIcon(cat.strCategory) }}</span>
      {{ cat.strCategory }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  categories: Array,
  selectedCategory: String,
})

const emit = defineEmits(['select'])

function selectCategory(category) {
  emit('select', category)
}

function categoryIcon(cat) {
  const map = {
    'Beef': '🐄',
    'Chicken': '🐔',
    'Dessert': '🍰',
    'Seafood': '🦞',
    'Pasta': '🍝',
    'Vegetarian': '🥦',
    'Vegan': '🌱',
    'Breakfast': '🍳',
    'Miscellaneous': '🍽️',
  }
  return map[cat] || '🍴'
}
</script>

<style scoped>
.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: flex-start;
  transition: all 0.3s ease;
}

/* Cuando no hay selección, botones grandes que ocupan todo el ancho */
.category-buttons.no-selection {
  justify-content: space-between;
}

.category-buttons.no-selection .category-btn {
  flex: 1 1 calc(33.33% - 10px); /* 3 botones por fila sin espacios */
  max-width: none;
  font-size: 1.2rem;
  padding: 15px 20px;
}

/* Botones normales */
.category-btn {
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s, border-color 0.3s, transform 0.2s;
  user-select: none;
  max-width: 200px;
}

.category-btn.selected {
  background-color: #42b983;
  border-color: #42b983;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.5);
}

.category-btn:hover:not(.selected) {
  background-color: #e0f3ec;
  transform: scale(1.03);
}

.icon {
  font-size: 1.2rem;
}
</style>

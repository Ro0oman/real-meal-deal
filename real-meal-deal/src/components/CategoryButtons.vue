<template>
    
  <div :class="['category-buttons', { 'no-selection': !selectedCategory }]">
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
  gap: 12px;
  justify-content: flex-start;
  margin-bottom: 20px;
}

/* Cuando NO hay categoría seleccionada, botones grandes en grid 3 columnas iguales */
.category-buttons.no-selection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* Botones normales */
.category-btn {
  padding: 10px 18px;
  border: 1px solid var(--border-color, #ccc);
  background: var(--btn-bg, white);
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s, border-color 0.3s, transform 0.2s;
  user-select: none;
  max-width: 200px;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Botones grandes cuando no hay selección */
.category-buttons.no-selection .category-btn {
  max-width: none;
  border-radius: 12px;
  font-size: 1.15rem;
  padding: 18px 0;
  justify-content: center;
  width: 100%;
}

/* Botón seleccionado */
.category-btn.selected {
  background-color: #42b983;
  border-color: #42b983;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.5);
}

/* Hover en botones no seleccionados */
.category-btn:hover:not(.selected) {
  background-color: #e0f3ec;
  transform: scale(1.03);
}

.icon {
  font-size: 1.2rem;
}
</style>

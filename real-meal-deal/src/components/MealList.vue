<template>
  <div class="meal-list">
    <div v-if="meals.length === 0" class="no-recipes">No recipes found.</div>
    <MealCard
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import MealCard from './MealCard.vue'

const props = defineProps({
  meals: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.meal-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media(min-width: 768px) {
  .meal-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.no-recipes {
  font-style: italic;
  color: #888;
}
</style>

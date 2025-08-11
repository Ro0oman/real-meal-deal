<template>
  <div class="meal-card" @click="openModal">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <h3>{{ meal.strMeal }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useMealStore } from '../stores/mealStore'

const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
})

const mealStore = useMealStore()

function openModal() {
  mealStore.fetchMealDetails(props.meal.idMeal)

}

</script>

<style scoped>
.meal-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  text-align: center;
  transition: box-shadow 0.3s;
}
.meal-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.meal-card img {
  width: 100%;
  border-radius: 6px;
}
.meal-card h3 {
  margin-top: 10px;
  font-size: 1.1rem;
}
</style>

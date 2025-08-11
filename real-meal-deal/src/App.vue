<template>
  <!-- <div id="app" class="container">
    <h1>RealMealDeal</h1>
    <CategorySelector
      :categories="categories"
      :selectedCategory="selectedCategory"
      @select="handleCategorySelect"
    />

    <div v-if="loading" class="loading">Loading...</div>

    <MealList v-else :meals="meals" />
    
    <RecipeModal
      v-if="selectedMeal"
      :meal="selectedMeal"
      :show="!!selectedMeal"
      @close="closeModal"
    />
  </div> -->

<div class="container">
    <h1>RealMealDeal</h1>

    <CategoryButtons
      :categories="categories"
      :selectedCategory="selectedCategory"
      @select="handleCategorySelect"
    />

    <div v-if="loading" class="loading">Loading...</div>

    <MealList v-else :meals="meals" />
  </div>

</template>

<script setup>
import CategoryButtons from './components/CategoryButtons.vue'
import MealList from './components/MealList.vue'
import { useMealStore } from './stores/mealStore'
import { onMounted, computed } from 'vue'



const mealStore = useMealStore()
const categories = computed(() => mealStore.categories)
const meals = computed(() => mealStore.meals)
const selectedCategory = computed(() => mealStore.selectedCategory)
const loading = computed(() => mealStore.loading)
function handleCategorySelect(category) {
  mealStore.fetchMeals(category)
}

onMounted(() => {
  mealStore.fetchCategories()
})
</script>


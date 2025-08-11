<script setup>
import CategoryButtons from './components/CategoryButtons.vue'
import MealList from './components/MealList.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import RecipeModal from './components/RecipeModal.vue'
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

function closeModal() {
  mealStore.closeModal()
}

onMounted(() => {
  mealStore.fetchCategories()
})
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>RealMealDeal</h1>
      <ThemeToggle />
    </div>

    <CategoryButtons
      :categories="categories"
      :selectedCategory="selectedCategory"
      @select="handleCategorySelect"
    />

    <div v-if="loading" class="loading">Loading...</div>

    <MealList v-else :meals="meals" />

    <!-- Aquí añades el modal -->
    <RecipeModal
      :meal="mealStore.selectedMeal"
      :show="mealStore.isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-color);
}
</style>

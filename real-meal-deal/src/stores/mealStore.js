import { defineStore } from 'pinia'
import { getCategories, getMealsByCategory } from '../services/mealApi'
import { getMealDetailsById } from '../services/mealApi.js'

export const useMealStore = defineStore('meal', {
  state: () => ({
    categories: [],
    meals: [],
    selectedCategory: null,
    loading: false,
    selectedMeal: null,
    loadingDetails: false,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true
      this.categories = await getCategories()
      this.loading = false
    },
    async fetchMeals(category) {
      this.loading = true
      this.meals = await getMealsByCategory(category)
      this.selectedCategory = category
      this.loading = false
    },
    async fetchMealDetails(id) {
    this.loadingDetails = true
    this.selectedMeal = await getMealDetailsById(id)
    this.loadingDetails = false
    },
    clearSelectedMeal() {
      this.selectedMeal = null
    }
  },
})

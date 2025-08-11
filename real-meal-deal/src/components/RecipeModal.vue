<template>
  <div v-if="show" class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">×</button>
      <h2>{{ meal.strMeal }}</h2>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />

      <h3>Ingredients</h3>
      <ul>
        <li v-for="(ing, index) in ingredients" :key="index">
          <img
            class="ingredient-thumb"
            :src="getIngredientImage(ing.name)"
            :alt="ing.name"
          />
          {{ ing.name }} - {{ ing.measure }}
        </li>
      </ul>

      <h3>Instructions</h3>
      <p v-html="meal.strInstructions"></p>

      <div v-if="meal.strYoutube">
        <h3>Video Tutorial</h3>
        <a :href="meal.strYoutube" target="_blank">{{ meal.strYoutube }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  meal: Object,
  show: Boolean,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

// Extraer ingredientes y medidas de la receta
const ingredients = computed(() => {
  const result = []
  if (!props.meal) return result

  for (let i = 1; i <= 20; i++) {
    const name = props.meal[`strIngredient${i}`]
    const measure = props.meal[`strMeasure${i}`]

    if (name && name.trim() !== '') {
      result.push({ name, measure })
    }
  }
  return result
})

// URL imagen de ingrediente oficial TheMealDB
function getIngredientImage(name) {
  return `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
    name
  )}-Small.png`
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
}
.meal-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}
.ingredient-thumb {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
</style>

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
        <p v-html="formattedInstructions"></p>



<div v-if="meal.strYoutube" class="video-container">
  <h3>Video Tutorial</h3>
  <iframe
    :src="youtubeEmbedUrl"
    frameborder="0" 
    width="100%"
    height="315"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title="YouTube video"
  ></iframe>
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

const youtubeEmbedUrl = computed(() => {
  if (!props.meal?.strYoutube) return ''
  // Extraer el ID del video de la URL de YouTube
  const url = props.meal.strYoutube
  const videoIdMatch = url.match(/v=([a-zA-Z0-9_-]{11})/)
  const videoId = videoIdMatch ? videoIdMatch[1] : ''
  return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
})

const formattedInstructions = computed(() => {
  if (!props.meal || !props.meal.strInstructions) return ''
  // Reemplaza saltos por <br> y además escapa caracteres especiales para evitar problemas
  return props.meal.strInstructions
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
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
.instructions {
  white-space: pre-wrap; /* respeta saltos de línea y espacios */
}
</style>
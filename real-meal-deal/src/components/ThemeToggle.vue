<template>
  <button @click="toggleTheme" class="theme-toggle-btn">
    {{ isDark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Inicializar según modo por defecto
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>

<style scoped>
.theme-toggle-btn {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--btn-bg);
  color: var(--text-color);
  transition: background-color 0.3s ease;
}
</style>

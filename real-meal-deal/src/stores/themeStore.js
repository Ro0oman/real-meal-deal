import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true, // por defecto modo oscuro activado
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    initTheme() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      }
    },
  },
})

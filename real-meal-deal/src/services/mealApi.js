const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/list.php?c=list`)
  const data = await res.json()
  return data.meals // array con categorías
}

export async function getMealsByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`)
  const data = await res.json()
  return data.meals // array con comidas básicas (id, nombre, imagen)
}


export async function getMealDetailsById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}
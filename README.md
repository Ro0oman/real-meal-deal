
# RealMealDeal

RealMealDeal is a Vue 3 application that helps you discover and explore recipes effortlessly. Select meal categories, browse recipes displayed in a responsive grid, and get detailed cooking instructions with ingredient images and embedded tutorial videos. The app supports light and dark modes for a comfortable viewing experience.

## Features

- Fetches meal categories and recipes from TheMealDB API  
- Responsive design with grid layout adapting to desktop and mobile  
- View detailed recipe information including ingredients, instructions, and YouTube tutorial videos  
- Light and dark theme toggle with smooth transitions  
- Clean and modern UI built with Vue 3 and Pinia for state management


## Installation

1. Clone the repository  
```bash
git clone https://github.com/Ro0oman/real-meal-deal.git
```

2. Navigate to the project directory  
```bash
cd real-meal-deal
```

3. Install dependencies  
```bash
npm install
```

4. Run the development server  
```bash
npm run dev
```

5. Open your browser and go to  
```
http://localhost:3000
```

## Usage

- Select a meal category using the category buttons on the homepage  
- Browse recipes displayed in a responsive grid  
- Click a recipe card to open a modal with detailed information including ingredients, instructions, and video tutorials  
- Use the theme toggle switch in the header to switch between light and dark modes for comfortable viewing

## Project Structure

- `src/components/` - Vue components such as `CategoryButtons.vue`, `MealList.vue`, `MealCard.vue`, `RecipeModal.vue`, and `ThemeToggle.vue`  
- `src/stores/` - Pinia store for managing state and API calls  
- `src/services/` - API service functions to fetch data from TheMealDB  
- `src/assets/` - CSS and other static assets  
- `src/App.vue` - Main application layout and structure  
- `src/main.js` - App entry point, mounting Vue and Pinia

## Technologies Used

- Vue 3  
- Pinia (state management)  
- Vite (build tool)  
- TheMealDB API (recipe data)  
- CSS variables and transitions for theming and responsive design

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is open source and available under the MIT License.

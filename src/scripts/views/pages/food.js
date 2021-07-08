import FoodRestaurantSource from '../../data/food-restaurant';
import { createFoodRestItemTemplate, createNoItemTemplate } from '../templates/template-creator';

const Food = {
  async render() {
    return `
        <h1 class="text-center page-label">Our Recommendation</h1>

        <div id="restaurantItemContainer" class="main-content">

        <div class="loader"><div></div><div></div></div>
        </div>
      `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    
    const restaurantItemContainer = document.querySelector('#restaurantItemContainer');
      try {
        const foodRestaurant = await FoodRestaurantSource.listRestaurant();
        restaurantItemContainer.innerHTML = '';
        foodRestaurant.forEach((restaurant) => {
          restaurantItemContainer.innerHTML += createFoodRestItemTemplate(restaurant);
        });
      } catch (error) {
        restaurantItemContainer.innerHTML = createNoItemTemplate();
      }
  },
};

export default Food;
import FoodRestaurantSource from '../../data/food-restaurant';
import { createFoodRestItemTemplate } from '../templates/template-creator';

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
    
      const foodRestaurant = await FoodRestaurantSource.listRestaurant();
      const restaurantItemContainer = document.querySelector('#restaurantItemContainer');
      restaurantItemContainer.innerHTML = '';
      foodRestaurant.forEach((restaurant) => {
        restaurantItemContainer.innerHTML += createFoodRestItemTemplate(restaurant);
      });
  },
};

export default Food;
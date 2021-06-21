import FoodRestaurantSource from '../../data/food-restaurant';
import { createFoodRestItemTemplate } from '../templates/template-creator';

const Food = {
  async render() {
    return `
        <h1 class="text-center">Our Recommendation</h1>

        <div id="restaurantItemContainer" class="main-content">
        
        </div>
      `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const foodRestaurant = await FoodRestaurantSource.listRestaurant();
    const restaurantItemContainer = document.querySelector('#restaurantItemContainer');
    
    foodRestaurant.forEach((restaurant) => {
      restaurantItemContainer.innerHTML += createFoodRestItemTemplate(restaurant);
    });
  },
};

export default Food;
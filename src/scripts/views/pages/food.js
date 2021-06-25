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
    
    try {
      const foodRestaurant = await FoodRestaurantSource.listRestaurant();
      const restaurantItemContainer = document.querySelector('#restaurantItemContainer');
      restaurantItemContainer.innerHTML = '';
      foodRestaurant.forEach((restaurant) => {
        restaurantItemContainer.innerHTML += createFoodRestItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Food;
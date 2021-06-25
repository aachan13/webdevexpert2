import FoodexIdb from '../../data/foodex-idb';
import { createFoodRestItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
            <h1 class="text-center page-label">Your Favorite Restaurant</h1>

            <div id="restaurantFavContainer" class="main-content">
              <div class="loader"><div></div><div></div></div>
        
            </div>
          `;
  },

  async afterRender() {
    const foodRestaurant = await FoodexIdb.getAllFoodRests();
    const restaurantItemContainer = document.querySelector('#restaurantFavContainer');
    restaurantItemContainer.innerHTML = '';
    foodRestaurant.forEach((restaurant) => {
      restaurantItemContainer.innerHTML += createFoodRestItemTemplate(restaurant);
    });
  },
};

export default Favorite;

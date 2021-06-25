import FoodexIdb from '../data/foodex-idb';
import { createFavButtonTemplate, createFavedButtonTemplate } from '../views/templates/template-creator';
 
const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },
 
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },
 
  async _isRestaurantExist(id) {
    const restaurant = await FoodexIdb.getFoodRest(id);
    return !!restaurant;
  },
 
  _renderFav() {
    this._favButtonContainer.innerHTML = createFavButtonTemplate();
 
    const favButton = document.querySelector('#favBtn');
    favButton.addEventListener('click', async () => {
      await FoodexIdb.putFoodRest(this._restaurant);
      this._renderButton();
    });
  },
 
  _renderFaved() {
    this._favButtonContainer.innerHTML = createFavedButtonTemplate();
 
    const favButton = document.querySelector('#favBtn');
    favButton.addEventListener('click', async () => {
      await FoodexIdb.deleteFoodRest(this._restaurant.id);
      this._renderButton();
    });
  },
};
 
export default FavButtonInitiator;
import { createFavButtonTemplate, createFavedButtonTemplate } from '../views/templates/template-creator';
 
const FavButtonPresenter = {
  async init({ favButtonContainer, favoriteRestaurant: FoodexIdb, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = FoodexIdb;
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
    const restaurant = await this._favoriteRestaurant.getFoodRest(id);
    return !!restaurant;
  },
 
  _renderFav() {
    this._favButtonContainer.innerHTML = createFavButtonTemplate();
 
    const favButton = document.querySelector('#favBtn');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putFoodRest(this._restaurant);
      this._renderButton();
    });
  },
 
  _renderFaved() {
    this._favButtonContainer.innerHTML = createFavedButtonTemplate();
 
    const favButton = document.querySelector('#favBtn');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteFoodRest(this._restaurant.id);
      this._renderButton();
    });
  },
};
 
export default FavButtonPresenter;
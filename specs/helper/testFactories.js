import FavButtonPresenter from '../../src/scripts/utils/fav-btn-presenter';
import FoodexIdb from '../../src/scripts/data/foodex-idb';
 
const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavButtonPresenter.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    favoriteRestaurant: FoodexIdb,
    restaurant,
  });
};
 
export { createFavButtonPresenterWithRestaurant };
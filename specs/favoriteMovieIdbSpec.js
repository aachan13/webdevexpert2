import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FoodexIdb from '../src/scripts/data/foodex-idb';
 
describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FoodexIdb.getAllFoodRests()).forEach(async (restaurant) => {
      await FoodexIdb.deleteFoodRest(restaurant.id);
    });
  });
 
  itActsAsFavoriteRestaurantModel(FoodexIdb);
});
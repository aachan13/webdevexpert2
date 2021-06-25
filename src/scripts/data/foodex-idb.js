import { openDB } from 'idb';
import CONFIG from '../global/config';
 
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
 
const FoodexIdb = {
  async getFoodRest(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllFoodRests() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putFoodRest(food) {
    return (await dbPromise).put(OBJECT_STORE_NAME, food);
  },
  async deleteFoodRest(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};
 
export default FoodexIdb;
import * as TestFactories from './helper/testFactories';
import FoodexIdb from '../src/scripts/data/foodex-idb';

const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
};

describe('Unfav restaurant', () => {

    beforeEach(async () => {
        addFavButtonContainer();
        await FoodexIdb.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
    });
 
    afterEach(async () => {
        await FoodexIdb.deleteFoodRest('rqdv5juczeskfw1e867');
    });
 
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
        id: 'rqdv5juczeskfw1e867'
    });

    expect(document.querySelector('[aria-label="unfav this restaurant"]'))
      .toBeTruthy();
  });
 
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
        id: 'rqdv5juczeskfw1e867'
    });
 
    expect(document.querySelector('[aria-label="fav this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove faved restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
        id: 'rqdv5juczeskfw1e867'
    });

    document.querySelector('#favBtn').dispatchEvent(new Event('click'));

    expect(await FoodexIdb.getAllFoodRests()).toEqual([]);
  });

  it('should not throw error if the unfaved restaurant is not in the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
        id: 'rqdv5juczeskfw1e867'
    });

    // hapus dulu restaurant dari daftar restaurant yang disukai
    await FoodexIdb.deleteFoodRest('rqdv5juczeskfw1e867');

    // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unfav this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FoodexIdb.getAllFoodRests()).toEqual([]);
  });
});
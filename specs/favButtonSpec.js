import FavButtonInitiator from './../src/scripts/utils/fav-btn-initiator';

import FoodexIdb from './../src/scripts/data/foodex-idb';


describe('Fav a restaurant', () => {

    const addFavButtonContainer = () => {
        document.body.innerHTML = '<div id="favButtonContainer"></div>';
    };
    
    beforeEach(() => {
        addFavButtonContainer();
    });

    // id = rqdv5juczeskfw1e867, restaurant = melting pot 
    
    it('should show the like button when the restaurant has not been faved before', async () => {
        await FavButtonInitiator.init({
            favButtonContainer: document.querySelector('#favButtonContainer'),
            restaurant: {
                id: 'rqdv5juczeskfw1e867',
            },
        });

        expect(document.querySelector('[aria-label="fav this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been faved before', async () => {
        await FavButtonInitiator.init({
          favButtonContainer: document.querySelector('#favButtonContainer'),
          restaurant: {
            id: 'rqdv5juczeskfw1e867',
            },
        });
    
        expect(document.querySelector('[aria-label="unfav this restaurant"]')).toBeFalsy();
      });

    it('should be able to like the movie', async () => {
        await FavButtonInitiator.init({
            favButtonContainer: document.querySelector('#favButtonContainer'),
            restaurant: {
            id: 'rqdv5juczeskfw1e867',
            },
        });

        document.querySelector('#favBtn').dispatchEvent(new Event('click'));
        const restaurant = await FoodexIdb.getFoodRest('rqdv5juczeskfw1e867');

        expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

        FoodexIdb.deleteFoodRest('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant again when its already faved', async () => {
        await FavButtonInitiator.init({
          favButtonContainer: document.querySelector('#favButtonContainer'),
          restaurant: {
            id: 'rqdv5juczeskfw1e867',
          },
        });
        
        await FoodexIdb.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
        
        document.querySelector('#favBtn').dispatchEvent(new Event('click'));
        
        expect(await FoodexIdb.getAllFoodRests()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);
    
        FoodexIdb.deleteFoodRest('rqdv5juczeskfw1e867');
      });

      // menggunakan metode xit, bukan it
    xit('should not add a movie when it has no id', async () => {
        await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {},
        });

        document.querySelector('#favBtn').dispatchEvent(new Event('click'));

        expect(await FoodexIdb.getAllFoodRests()).toEqual([]);
    });

});

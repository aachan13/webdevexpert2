const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {

    it('should return the restaurants that has been added', async () => {
      favoriteRestaurant.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
      favoriteRestaurant.putFoodRest({ id: 's1knt6za9kkfw1e867' });
   
      expect(await favoriteRestaurant.getFoodRest('rqdv5juczeskfw1e867'))
        .toEqual({ id: 'rqdv5juczeskfw1e867' });
      expect(await favoriteRestaurant.getFoodRest('s1knt6za9kkfw1e867'))
        .toEqual({ id: 's1knt6za9kkfw1e867' });
      expect(await favoriteRestaurant.getFoodRest(3))
        .toEqual(undefined);
    });
   
    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
      favoriteRestaurant.putFoodRest({ aProperty: 'property' });
   
      expect(await favoriteRestaurant.getAllFoodRests())
        .toEqual([]);
    });
   
    it('can return all of the restaurant that have been added', async () => {
        favoriteRestaurant.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
        favoriteRestaurant.putFoodRest({ id: 's1knt6za9kkfw1e867' });
   
      expect(await favoriteRestaurant.getAllFoodRests())
        .toEqual([
          { id: 'rqdv5juczeskfw1e867' },
          { id: 's1knt6za9kkfw1e867' },
        ]);
    });
   
    it('should remove favorite movie', async () => {
      favoriteRestaurant.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
      favoriteRestaurant.putFoodRest({ id: 's1knt6za9kkfw1e867' });
      favoriteRestaurant.putFoodRest({ id: 'uewq1zg2zlskfw1e867' });
   
      await favoriteRestaurant.deleteFoodRest('rqdv5juczeskfw1e867');
   
      expect(await favoriteRestaurant.getAllFoodRests())
        .toEqual([
          { id: 's1knt6za9kkfw1e867' },
          { id: 'uewq1zg2zlskfw1e867' },
        ]);
    });
   
    it('should handle request to remove a restaurant even though the movie has not been added', async () => {
        favoriteRestaurant.putFoodRest({ id: 'rqdv5juczeskfw1e867' });
        favoriteRestaurant.putFoodRest({ id: 's1knt6za9kkfw1e867' });
        favoriteRestaurant.putFoodRest({ id: 'uewq1zg2zlskfw1e867' });
   
      await favoriteRestaurant.deleteFoodRest(4);
   
      expect(await favoriteRestaurant.getAllFoodRests())
        .toEqual([
          { id: 'rqdv5juczeskfw1e867' },
          { id: 's1knt6za9kkfw1e867' },
          { id: 'uewq1zg2zlskfw1e867' },
        ]);
    });
  };
   
  export { itActsAsFavoriteRestaurantModel };
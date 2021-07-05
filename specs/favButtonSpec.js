import FavButtonInitiator from './../src/scripts/utils/fav-btn-initiator';


describe('Fav a restaurant', () => {
    it('should show the like button when the restaurant has not been faved before', async () => {
        document.body.innerHTML = '<div id="favButtonContainer"></div>';
        await FavButtonInitiator.init({
            favButtonContainer: document.querySelector('#favButtonContainer'),
            restaurant: {
                id: 'rqdv5juczeskfw1e867',
            },
        });

        expect(document.querySelector('[aria-label="fav this restaurant"]')).toBeTruthy();
    });

});

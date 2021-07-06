Feature('Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

const assert = require('assert');

Scenario('show empty fav', ({ I }) => {
    I.seeElement('#noFavRestaurant');
    I.see('Tidak ada restaurant untuk ditampilkan', '#noRestaurantText');
});

Scenario('fav one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '#noRestaurantText');
   
    I.amOnPage('/');
    // … kita akan mengisi uji coba berikutnya …
    I.seeElement('.restaurant');

    const restaurantPertama = locate('.konten-header').first();
    const firstRestaurantTitle = await I.grabTextFrom(restaurantPertama);
    I.click(restaurantPertama);

    I.seeElement('#favBtn');
    I.click('#favBtn');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant');

    const favedRestaurant = await I.grabTextFrom('.konten-header');
 
    assert.strictEqual(firstRestaurantTitle, favedRestaurant);
});

Scenario('unfav restaurant', async ({ I }) => {
    
    

});

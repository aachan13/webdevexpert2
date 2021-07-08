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

Scenario('unfav one restaurant', async ({ I }) => {
    
    I.amOnPage('/');
    const restaurantPertama = locate('.konten-header').first();
    I.click(restaurantPertama);

    // fav restaurant
    I.seeElement('#favBtn');
    I.click('#favBtn');

    I.amOnPage('/#/favorite');
    
    const favoritePertama = locate('.konten-header').first();
    I.click(favoritePertama);

    // unfav restaurant
    I.seeElement('#favBtn');
    I.click('#favBtn');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '#noRestaurantText');
});

Scenario('review restaurant', async ({ I }) => {
    
    const name = 'Aachan';
    const review = 'Tes e2e fadhil lagi';
    I.amOnPage('/');
    const restaurantPertama = locate('.konten-header').first();
    I.click(restaurantPertama);

    I.seeElement('#inputReviewName');
    I.seeElement('#inputReview');
    I.seeElement('#btnSimpanReview');

    I.fillField('#inputReviewName', 'Aachan');
    I.fillField('#inputReview', review);
    I.click('#btnSimpanReview');

    I.wait(2);

    const nameReviewTerakhir = locate('.review-name').last();
    const textNameReview = await I.grabTextFrom(nameReviewTerakhir);

    const reviewTerakhir = locate('.review-text').last();
    const textReview = await I.grabTextFrom(reviewTerakhir);

    assert.strictEqual(name, textNameReview);
    assert.strictEqual(review, textReview);
});

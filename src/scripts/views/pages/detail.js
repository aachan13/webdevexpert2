import UrlParser from '../../routes/url-parser';
import FoodRestaurantSource from '../../data/food-restaurant';
import {
  createDetailRestaurantHeader, createRestaurantCategoriesTemplate, createDetailRestaurantBody, createRatingMenuTemplate, createReviewTemplate, createFavButtonTemplate,
} from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-btn-initiator';
import ReviewButtonInitiator from '../../utils/review-initator';

const Detail = {
  async render() {
    return `
          <h2 id="detailTitle"></h2>

          <div id="detailRestaurantContainer" class="detail-content">
            <div class="position-relative">
                <div id="detailRestaurantHeader">
                </div>
                <div id="favButtonContainer">
                </div>
            </div>
            
            <div class="menu-and-rating" id="ratingMenu">
              
            </div>

            <detail-cont title="Kategori" id="kategoriRestaurantContainer"></detail-cont>

            <div id="detailRestaurantBody">

            </div>

            <p class="detail-content-header">Tambah Review</p>
            <input id="inputReviewName" class="input-text" placeholder="nama anda.."></input>
            <textarea id="inputReview" class="input-text" rows="3" placeholder="ketik review anda.."></textarea>
            <div id="btnSimpanReviewCont">
              <button class="btn bg-primary" id="btnSimpanReview">Simpan</button>
            </div>
            
            <div id="errorText"></div>

            <detail-cont title="Review" id="reviewRestaurantContainer"></detail-cont>

          </div>
        `;
  },
    
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await FoodRestaurantSource.detailRestaurant(url.id);

    const detailRestaurantHeader = document.querySelector('#detailRestaurantHeader');
    const ratingMenu = document.querySelector('#ratingMenu');
    const kategoriRestaurantContainer = document.querySelector('#kategoriRestaurantContainer');
    const detailRestaurantBody = document.querySelector('#detailRestaurantBody');
    const reviewRestaurantContainer = document.querySelector('#reviewRestaurantContainer');
    const favButtonContainer = document.querySelector('#favButtonContainer');
    
    const makanan = Object.values(detailRestaurant.restaurant.menus.foods).map((food) => food.name);
    const minuman = Object.values(detailRestaurant.restaurant.menus.drinks).map((drink) => drink.name);

    detailRestaurantHeader.innerHTML = createDetailRestaurantHeader(detailRestaurant.restaurant);
    
    ratingMenu.innerHTML = createRatingMenuTemplate(detailRestaurant.restaurant);

    detailRestaurant.restaurant.categories.forEach((category) => {
      kategoriRestaurantContainer.innerHTML += createRestaurantCategoriesTemplate(category);
    });

    detailRestaurantBody.innerHTML = createDetailRestaurantBody(detailRestaurant.restaurant, makanan, minuman);

    detailRestaurant.restaurant.customerReviews.forEach((review) => {
      reviewRestaurantContainer.innerHTML += createReviewTemplate(review);
    });

    favButtonContainer.innerHTML = createFavButtonTemplate();

    FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: detailRestaurant.restaurant.id,
        name: detailRestaurant.restaurant.name,
        description: detailRestaurant.restaurant.description,
        pictureId: detailRestaurant.restaurant.pictureId,
        city: detailRestaurant.restaurant.city,
        rating: detailRestaurant.restaurant.rating,
      },
    });

    ReviewButtonInitiator.init({
      button: document.querySelector('#btnSimpanReview'),
      idRestaurant: detailRestaurant.restaurant.id,
    });
  },
};

export default Detail;

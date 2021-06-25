import FoodRestaurantSource from '../data/food-restaurant';
import { createErrorReviewTemplate, createSuccessReviewTemplate, createReviewTemplate } from '../views/templates/template-creator';

const ReviewButtonInitiator = {
  init({ button, idRestaurant }) {
    this._button = button;
    this._idRestaurant = idRestaurant;
    this._inputName = document.querySelector('#inputReviewName');
    this._inputReview = document.querySelector('#inputReview');

    button.addEventListener('click', async () => {
      const data = {
        id: idRestaurant,
        name: this._inputName.value,
        review: this._inputReview.value,
      };
      const resp = await FoodRestaurantSource.submitReview(data);
      this._renderMessage(resp);
    });
  },

  _renderMessage(resp) {
    const errorText = document.querySelector('#errorText');
    if (!resp.error) {
      errorText.innerHTML = createSuccessReviewTemplate();
      this._renderReview(resp.customerReviews);
    } else {
      errorText.innerHTML = createErrorReviewTemplate();
    }
  },

  _renderReview(reviews) {
    const reviewTemplate = document.querySelector('#reviewRestaurantContainer');
    reviewTemplate.innerHTML = '';
    reviews.forEach((review) => {
      reviewTemplate.innerHTML += createReviewTemplate(review);
    });
    this._resetForm();
  },

  _resetForm() {
    this._inputName.value = '';
    this._inputReview.value = '';
  },
};
  
  
export default ReviewButtonInitiator;
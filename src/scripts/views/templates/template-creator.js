import CONFIG from '../../global/config';
 
const createDetailRestaurantHeader = (restaurant) => `

    <img src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="detail-content-img"/>

    <h1 class="label-img">${restaurant.name}</h1>
`;

const createRatingMenuTemplate = (restaurant) => `

    <div class="menu-rating-content">
        <p class="menu-rating-title">${restaurant.rating}</p>
        <p>rating ⭐</p>
    </div>

    <div class="menu-rating-content">
        <p class="menu-rating-title">${restaurant.menus.foods.length}</p>
        <p>foods 🍲</p>
    </div>

    <div class="menu-rating-content">
        <p class="menu-rating-title">${restaurant.menus.drinks.length}</p>
        <p>drinks 🍹</p>
    </div>
`;

const createRestaurantCategoriesTemplate = (category) => `

    <span class="pill-badge">${category.name}</div>
`;

const createDetailRestaurantBody = (restaurant, makanan, minuman) => `
    <detail-cont title="Alamat" konten="${restaurant.address}, ${restaurant.city}"></detail-cont>

    <detail-cont title="Menu Makanan" konten="${makanan.join(', ')}"></detail-cont>

    <detail-cont title="Menu Minuman" konten="${minuman.join(', ')}"></detail-cont>

    <detail-cont title="Deskripsi" konten="${restaurant.description}"></detail-cont>

`;

const createReviewTemplate = (review) => `
    <div class="review-box">
        <p><strong>${review.name}</strong></p>
        <p>${review.review}</p>
        <p class="review-date"><small>${review.date}</small></p>
    </div>
`;

const createFoodRestItemTemplate = (restaurant) => `
    <a class="konten-container restaurant" href="${`/#/detail/${restaurant.id}`}">
        <img src="${CONFIG.BASE_MED_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="konten-img"/>

        <div class="konten">
            <p class="konten-header">
                ${restaurant.name}
            </p>
            <p class="konten-subtitle"><small> <span id="rating"><i class="fas fa-star fa-fw orange"></i> ${restaurant.rating}</span> <span><i class="fas fa-map-marker-alt fa-fw red"></i> ${restaurant.city}</small></span></p>
            <p class="konten-text">
                ${restaurant.description}...
            </p>
            <p class="konten-cta"><small>Selengkapnya &rarr;</small></p>
        </div>
    </a>
  `;

const createFavButtonTemplate = () => `
  
    <button aria-label="fav this restaurant" class="favorite-btn bg-primary" id="favBtn"><i class="far fa-heart"></i></button>
`;
 
const createFavedButtonTemplate = () => `
    <button aria-label="unfav this restaurant" class="favorite-btn bg-primary"><i class="fas fa-heart" id="favBtn"></i></button>
`;

const createErrorReviewTemplate = () => `
    <small aria-label="gagal submit review" class="text-error">Submit review gagal. Pastikan input tidak kosong dan internet anda lancar.</small>
`;

const createSuccessReviewTemplate = () => `
    <small aria-label="sukses submit review" class="text-sukses">Submit review berhasil.</small>
`;

const createNoItemTemplate = () => `

    <div id="noFavRestaurant">
        <img src="../images/no_item.svg" class="no-item-image" height="350px"/>
        <p class="text-center" id="noRestaurantText">Tidak ada restaurant untuk ditampilkan</p>
    </div>
`;


export {
  createFoodRestItemTemplate, createDetailRestaurantHeader, createRestaurantCategoriesTemplate, createDetailRestaurantBody, createRatingMenuTemplate, createReviewTemplate, createFavButtonTemplate, createFavedButtonTemplate, createErrorReviewTemplate, createSuccessReviewTemplate, createNoItemTemplate
};
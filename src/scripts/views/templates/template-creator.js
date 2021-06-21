import CONFIG from '../../global/config';
 
const createFoodRestDetailTemplate = (movie) => `
  <a class="konten-container" href="${`/#/detail/${restaurant.id}`}">
        <img src="${CONFIG.BASE_MED_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="konten-img">

        <div class="konten">
            <p class="konten-header">
                ${restaurant.name}
            </p>
            <p class="konten-subtitle"><small> <span id="rating"><i class="fas fa-star fa-fw orange"></i> ${restaurant.rating}</span> <span><i class="fas fa-map-marker-alt fa-fw red"></i> ${restaurant.city}</small></span></p>
            <p class="konten-text">
                ${restaurant.description.substr(0, 120)}...
            </p>
        </div>
    </div>
`;

const createFoodRestItemTemplate = (restaurant) => `
    <a class="konten-container" href="${`/#/detail/${restaurant.id}`}">
        <img src="${CONFIG.BASE_MED_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="konten-img">

        <div class="konten">
            <p class="konten-header">
                ${restaurant.name}
            </p>
            <p class="konten-subtitle"><small> <span id="rating"><i class="fas fa-star fa-fw orange"></i> ${restaurant.rating}</span> <span><i class="fas fa-map-marker-alt fa-fw red"></i> ${restaurant.city}</small></span></p>
            <p class="konten-text">
                ${restaurant.description.substr(0, 120)}...
            </p>
        </div>
    </a>
  `;
 
export { createFoodRestItemTemplate, createFoodRestDetailTemplate };
import UrlParser from '../../routes/url-parser';
import FoodRestaurantSource from '../../data/food-restaurant';
import { createFoodRestItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <h2 id="detailTitle"></h2>
        `;
  },
    
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await FoodRestaurantSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;

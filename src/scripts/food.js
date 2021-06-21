function main() {
  console.log('Hello');

  const getFoodData = () => {
    // eslint-disable-next-line global-require
    const dataMakanan = require('../DATA.json');
    const mainContent = document.querySelector('#mainContent');
    
    dataMakanan.restaurants.forEach((makanan) => {
      const description = `${makanan.description.substr(0, 120)}...`;
      mainContent.innerHTML += `
                    <div class="konten-container hvr-glow">
                        <img src="${makanan.pictureId}" alt="${makanan.name}" class="konten-img">

                        <div class="konten">
                            <p class="konten-header">
                                ${makanan.name}
                            </p>
                            <p class="konten-subtitle"><small> <span id="rating"><i class="fas fa-star fa-fw orange"></i> ${makanan.rating}</span> <span><i class="fas fa-map-marker-alt fa-fw red"></i> ${makanan.city}</small></span></p>
                            <p class="konten-text">
                                ${description}
                            </p>
                        </div>
                    </div>
                `;
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    // const navBtn = document.querySelector('#mobileMenu');
    // const navMenu = document.querySelector('#mainNav');
    // navBtn.addEventListener('click', () => {
    //   navMenu.classList.toggle('open');
    // });
    getFoodData();
  });
}

export default main;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const introSlider = new Swiper('.hero-slider', {
  loop: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    type: 'bullets',
    renderBullet: function (index, className) {
      const sliderItemNames = ['intro', 'work', 'about', 'contacts'];
      return `
        <li class="${className}">
          <div class="slider-pagination__progress">
            <div class="slider-pagination__progress-bar"></div>
          </div>
          <div class="slider-pagination__content">
            <strong>0${index + 1}</strong>
            <span>${sliderItemNames[index]}</span>
          </div>
        </li>
      `;
    },
  },
});

export default introSlider;
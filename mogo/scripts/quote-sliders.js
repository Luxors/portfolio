import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const quoteSliderFirst = new Swiper('.quote-swiper-first', {
  navigation: {
    nextEl: '.quote-swiper-first-button--next',
    prevEl: '.quote-swiper-first-button--prev',
  },
});

export const quoteSliderSecond = new Swiper('.quote-swiper-second', {
  navigation: {
    nextEl: '.quote-swiper-second-button--next',
    prevEl: '.quote-swiper-second-button--prev',
  },
});
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper('.hp-counter__swiper', {
  pagination: {
    el: '.js-swiper-pagination-dynamic-element',
    dynamicBullets: true,
  },
});

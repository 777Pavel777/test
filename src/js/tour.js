import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// document.addEventListener('DOMContentLoaded', () => {
//   const tourSliderEl = document.querySelector('.tours-container');
//   const tourSliderProps = {
//     speed: 900,
//     spaceBetween: 30,
//     slidesPerView: 2,
//     allowTouchMove: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   };
//   const tourSlider = new Swiper(tourSliderEl, tourSliderProps);
// });

const reviewsSliderElement = document.querySelector('.mySwiper');
const reviewsSliderProps = {
  speed: 900,
  allowTouchMove: false,
  loop: true,
  simulateTouch: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1280: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
};

const reviewsSlider = new Swiper(reviewsSliderElement, reviewsSliderProps);

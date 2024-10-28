import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export default function productDetailImage() {
  const bigSwiper = new Swiper(".swiper-big", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const smallSwiper = new Swiper(".swiper-small", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: bigSwiper,
    },
  });
}

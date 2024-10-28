import Swiper from "swiper";

export default function categories() {
  const swiper = new Swiper(".home .categories .swiper", {
    loop: true,
    spaceBetween: 4,
    slidesPerView: 6,
    breakpoints: {
      640: {
        spaceBetween: 6,
        slidesPerView: 6,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 7,
      },
      1024: {
        spaceBetween: 10,
        slidesPerView: 8,
      },
    },
  });
}

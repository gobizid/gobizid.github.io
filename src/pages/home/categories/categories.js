export default function Categories() {
  const swiper = new Swiper("section.categories .swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
      640: {
        spaceBetween: 15,
        slidesPerView: 6,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 6,
      },
      1024: {
        spaceBetween: 25,
        slidesPerView: 7,
      },
    },
  });
}

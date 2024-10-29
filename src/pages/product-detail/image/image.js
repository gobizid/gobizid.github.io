export default function productDetailImage() {
  const smallSwiper = new Swiper(".swiper-small", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  const bigSwiper = new Swiper(".swiper-big", {
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    thumbs: {
      swiper: smallSwiper,
    },
  });
}

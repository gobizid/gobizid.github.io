import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function hero() {
  const swiper = new Swiper(".home .hero .swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
  });
}

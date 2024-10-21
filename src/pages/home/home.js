import loadComponent from "/src/helpers/loadComponent.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import navbar from "/src/components/navbar/navbar.js";
import hero from "/src/pages/home/hero/hero.js";
import categories from "/src/pages/home/categories/categories.js";
import slide from "/src/pages/home/partners/slide.js";
import products from "/src/pages/home/products/products.js";
import members from "/src/pages/home/members/members.js";

export default function loadHome() {
  const promises = [
    loadComponent("header.navbar", "/src/components/navbar/navbar.html"),
    loadComponent(".home .hero", "/src/pages/home/hero/hero.html"),
    loadComponent(
      ".home .categories",
      "/src/pages/home/categories/categories.html"
    ),
    loadComponent(".home .products", "/src/pages/home/products/products.html"),
    loadComponent(".home .join", "/src/pages/home/join/join.html"),
    loadComponent(".home .members", "/src/pages/home/members/members.html"),
    loadComponent(".home .partners", "/src/pages/home/partners/partners.html"),
    loadComponent(
      ".home .testimonials",
      "/src/pages/home/testimonials/testimonials.html"
    ),
    loadComponent("footer.footer", "/src/components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      hero();
      categories();
      products();
      slide();
      members();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

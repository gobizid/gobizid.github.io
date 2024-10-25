import loadComponent from "/src/helpers/loadComponent.js";
import navbar from "/src/components/navbar/navbar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import productDetailHeader from "./header/header.js";
import productDetailImage from "./image/image.js";

export default function loadProductDetail() {
  const promises = [
    loadComponent("header.navbar", "/src/components/navbar/navbar.html"),
    loadComponent(
      ".product-detail .product-detail-header",
      "/src/pages/product-detail/header/header.html"
    ),
    loadComponent(
      ".product-detail .product-detail-image",
      "/src/pages/product-detail/image/image.html"
    ),
    loadComponent("footer.footer", "/src/components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      navbar();
      smoothScroll();
      productDetailHeader();
      productDetailImage();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

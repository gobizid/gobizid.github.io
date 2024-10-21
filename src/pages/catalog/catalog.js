import loadComponent from "../../helpers/loadComponent.js";
import smoothScroll from "../../helpers/smoothScroll.js";
import navbar from "../../components/navbar/navbar.js";
import catalogFilter from "./catalog-filter/catalogFilter.js";

export default function loadCatalog() {
  const promises = [
    loadComponent("header.navbar", "/src/components/navbar/navbar.html"),
    loadComponent(
      ".catalog .catalog-filter",
      "/src/pages/catalog/catalog-filter/catalog-filter.html"
    ),
    loadComponent(
      ".catalog .catalog-display",
      "/src/pages/catalog/catalog-display/catalog-display.html"
    ),
    loadComponent(
      ".catalog .catalog-display",
      "/src/pages/catalog/catalog-display/catalog-display.html"
    ),
    loadComponent("footer.footer", "/src/components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      catalogFilter();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

import loadComponent from "/src/helpers/loadComponent.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import navbar from "/src/components/navbar/navbar.js";
import catalogFilter from "/src/pages/catalog/catalog-filter/catalogFilter.js";
import catalogDisplay from "/src/pages/catalog/catalog-display/catalogDisplay.js";

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
    loadComponent("footer.footer", "/src/components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      catalogFilter();
      catalogDisplay();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

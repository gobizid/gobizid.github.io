import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";

export default function loadManagementProductCategoriesUpdate() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent(
      "",
      "/src/pages/management-product/categories/update/update.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
      smoothScroll();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

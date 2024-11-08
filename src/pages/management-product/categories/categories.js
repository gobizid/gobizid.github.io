import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import getAllCateogories from "/src/pages/management-product/categories/fetch.js";

export default function loadManagementProductCategories() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent(
      "",
      "/src/pages/management-product/categories/categories.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
      smoothScroll();
      getAllCateogories();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

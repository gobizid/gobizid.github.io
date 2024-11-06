import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";

export default function loadManagementProductCategories() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent("main.management-product section.content", "/src/pages/management-product/management-product.html"),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

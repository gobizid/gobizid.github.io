import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import dataproduct from "/src/pages/management-product/product/tableProduct/dataproduct.js"

export default function loadManagementProductCategories() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent(
      "main.management-product section.content",
      "/src/pages/management-product/product/tableProduct/table.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
      smoothScroll();
      dataproduct();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

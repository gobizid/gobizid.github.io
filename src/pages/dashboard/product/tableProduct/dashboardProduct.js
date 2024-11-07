import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";

export default function loadDashboardTable() {
    const promises = [
      loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
      loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
      loadComponent("section.user", "/src/pages/dashboard/product/tableProduct/tableProduct/product.html"),
    ];
  
    Promise.all(promises)
    .then(() => {
      sidebarTogle()
    })
      .catch((error) => {
        console.error("Error loading components:", error);
      });
  }
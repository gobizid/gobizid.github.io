import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";

export default function loadDashboard() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

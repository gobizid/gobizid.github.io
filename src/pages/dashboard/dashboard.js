import loadComponent from "/src/helpers/loadComponent.js";

export default function loadDashboard() {
    const promises = [
      loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
      loadComponent("header.topbar", "/src/components/topbar/topbar.html")
    ];
  
    Promise.all(promises)
      .then(() => {
        
      })
      .catch((error) => {
        console.error("Error loading components:", error);
      });
  }
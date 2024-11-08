import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";

function toggleOptions() {
  const items = document.querySelectorAll(".content-main .item");

  items.forEach((item) => {
    const toggleButton = item.querySelector(".material-symbols-outlined");
    const toggleContainer = item.querySelector(".toggle");

    toggleButton.addEventListener("click", (e) => {
      toggleContainer.classList.toggle("active");
      e.stopPropagation();
    });

    document.addEventListener("click", (e) => {
      if (
        !toggleContainer.contains(e.target) &&
        !toggleButton.contains(e.target)
      ) {
        toggleContainer.classList.remove("active");
      }
    });
  });
}

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
      toggleOptions();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

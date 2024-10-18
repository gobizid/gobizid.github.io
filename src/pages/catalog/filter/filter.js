import price from "./price.js";

export default function filter() {
  price();

  // ----- Filter Controll ----- //
  const filter = document.querySelector(".catalog .catalog-filter");
  const controlFilter = document.querySelector(
    ".catalog-display .controll-filter"
  );

  document
    .querySelector(".filter-header .filter-header-close")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("expanded");
      filter.classList.toggle("hidden");
    });
  document
    .querySelector(".catalog-display .controll-filter")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("expanded");
      filter.classList.toggle("hidden");
    });

  // ----- Close Filter Part ----- //
  document
    .querySelectorAll(
      ".filter-categories-title .close-filter-part, .filter-address-title .close-filter-part, .filter-price-title .close-filter-part"
    )
    .forEach((close) => {
      close.addEventListener("click", (event) => {
        const parentFilter = event.target.closest(
          ".filter-categories, .filter-address, .filter-price"
        );
        const listExp = parentFilter.querySelector(
          ".filter-categories-list, .filter-address-list, .filter-price-list"
        );

        listExp.classList.toggle("expanded");

        if (listExp.classList.contains("expanded")) {
          close.classList.add("fa-square-plus");
          close.classList.remove("fa-square-minus");
        } else {
          close.classList.add("fa-square-minus");
          close.classList.remove("fa-square-plus");
        }
      });
    });

  // ----- Address Filter Button ----- //
  document.querySelectorAll(".filter-address-list > div").forEach((filter) => {
    filter.addEventListener("click", function () {
      document.querySelectorAll(".filter-address-list > div").forEach((f) => {
        if (f !== this) {
          f.classList.remove("expanded");
        }
      });
      this.classList.toggle("expanded");
    });
  });
}

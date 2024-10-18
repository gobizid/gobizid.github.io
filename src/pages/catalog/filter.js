export default function filter() {
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

  // ----- Address Filter Button ----- //
  document.querySelectorAll(".filter-address > div").forEach((filter) => {
    filter.addEventListener("click", function () {
      document.querySelectorAll(".filter-address > div").forEach((f) => {
        if (f !== this) {
          f.classList.remove("expanded");
        }
      });

      this.classList.toggle("expanded");
    });
  });
}

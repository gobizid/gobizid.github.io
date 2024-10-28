function filterControll() {
  const filter = document.querySelector(".catalog .catalog-filter");
  const controlFilter = document.querySelector(
    ".catalog-display .display-header"
  );

  document
    .querySelector(".filter-header .filter-header-close")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("collapse");
      filter.classList.toggle("hidden");
    });
  document
    .querySelector(".catalog-display .display-header")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("collapse");
      filter.classList.toggle("hidden");
    });
}

export default function catalogDisplay() {
  filterControll();
}

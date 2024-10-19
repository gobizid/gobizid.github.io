export default function controll() {
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
}

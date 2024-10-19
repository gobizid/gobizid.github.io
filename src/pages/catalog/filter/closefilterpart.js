export default function closeFilterPart() {
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
}

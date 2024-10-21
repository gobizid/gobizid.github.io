import formatRupiah from "../../../helpers/formatRupiah.js";

function filterClosePart() {
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

function filterControll() {
  const filter = document.querySelector(".catalog .catalog-filter");
  const controlFilter = document.querySelector(
    ".catalog-display .display-header"
  );

  document
    .querySelector(".filter-header .filter-header-close")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("expanded");
      filter.classList.toggle("hidden");
    });
  document
    .querySelector(".catalog-display .display-header")
    .addEventListener("click", () => {
      controlFilter.classList.toggle("expanded");
      filter.classList.toggle("hidden");
    });
}

function filterAddress() {
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

function filterPrice() {
  const minPriceInput = document.querySelector(".min-price-input input");
  const maxPriceInput = document.querySelector(".max-price-input input");
  const minPriceDisplay = document.querySelector(".min-price-display");
  const maxPriceDisplay = document.querySelector(".max-price-display");

  function updateInputToDisplay() {
    const minPriceValue = parseFloat(minPriceInput.value);
    const maxPriceValue = parseFloat(maxPriceInput.value);

    if (!isNaN(minPriceValue)) {
      minPriceDisplay.textContent = formatRupiah(minPriceValue);
    }

    if (!isNaN(maxPriceValue)) {
      maxPriceDisplay.textContent = formatRupiah(maxPriceValue);
    }
  }

  minPriceInput.addEventListener("input", updateInputToDisplay);
  maxPriceInput.addEventListener("input", updateInputToDisplay);

  updateInputToDisplay();
}

export default function catalogFilter() {
  filterClosePart();
  filterControll();
  filterAddress();
  filterPrice();
}

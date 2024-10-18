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

  const minPriceInput = document.getElementById("minPriceInput");
  const maxPriceInput = document.getElementById("maxPriceInput");
  const minPriceRange = document.getElementById("minPriceRange");
  const maxPriceRange = document.getElementById("maxPriceRange");
  const minPriceDisplay = document.getElementById("minPriceDisplay");
  const maxPriceDisplay = document.getElementById("maxPriceDisplay");

  // Fungsi untuk memperbarui harga di input number dan display saat slider digerakkan
  function updatePriceFromRange() {
    minPriceInput.value = minPriceRange.value;
    maxPriceInput.value = maxPriceRange.value;
    minPriceDisplay.textContent = minPriceRange.value;
    maxPriceDisplay.textContent = maxPriceRange.value;
  }

  // Fungsi untuk memperbarui slider saat input number diubah
  function updateRangeFromInput() {
    minPriceRange.value = minPriceInput.value;
    maxPriceRange.value = maxPriceInput.value;
    minPriceDisplay.textContent = minPriceInput.value;
    maxPriceDisplay.textContent = maxPriceInput.value;
  }

  // Event listener untuk slider
  minPriceRange.addEventListener("input", updatePriceFromRange);
  maxPriceRange.addEventListener("input", updatePriceFromRange);

  // Event listener untuk input number
  minPriceInput.addEventListener("input", updateRangeFromInput);
  maxPriceInput.addEventListener("input", updateRangeFromInput);

  // Mencegah overlap harga minimum dan maksimum
  minPriceRange.addEventListener("input", function () {
    if (parseInt(minPriceRange.value) >= parseInt(maxPriceRange.value)) {
      maxPriceRange.value = minPriceRange.value;
      maxPriceInput.value = maxPriceRange.value;
    }
  });

  maxPriceRange.addEventListener("input", function () {
    if (parseInt(maxPriceRange.value) <= parseInt(minPriceRange.value)) {
      minPriceRange.value = maxPriceRange.value;
      minPriceInput.value = minPriceRange.value;
    }
  });
}

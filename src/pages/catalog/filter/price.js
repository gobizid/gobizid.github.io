import formatRupiah from "../../../helpers/formatrupiah.js";

export default function price() {
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

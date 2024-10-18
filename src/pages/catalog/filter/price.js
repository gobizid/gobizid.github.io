import formatRupiah from "../../../helpers/formatrupiah.js";

export default function price() {
  const minPriceInput = document.querySelector(".min-price-input");
  const maxPriceInput = document.querySelector(".max-price-input");
  const minPriceDisplay = document.getElementById("minPriceDisplay");
  const maxPriceDisplay = document.getElementById("maxPriceDisplay");

  function updateInputToDisplay() {
    minPriceDisplay.textContent = minPriceInput.value;
    maxPriceDisplay.textContent = maxPriceInput.value;
  }

  // Event listener untuk input number
  minPriceInput.addEventListener("input", updateInputToDisplay);
  maxPriceInput.addEventListener("input", updateInputToDisplay);

  if (minPriceInput > 0) {
    const valueMin = parseFloat(minPriceInput.value);
    if (!isNaN(valueMin)) {
      minPriceInput.textContent = formatRupiah(valueMin);
    }
  }

  if (maxPriceInput > 0) {
    const valueMax = parseFloat(maxPriceInput.value);
    if (!isNaN(valueMax)) {
      maxPriceInput.textContent = formatRupiah(valueMax);
    }
  }

  if (maxPriceDisplay > 0) {
    const valueMax = parseFloat(maxPriceDisplay.value);
    if (!isNaN(valueMax)) {
      maxPriceDisplay.textContent = formatRupiah(valueMax);
    }
  }

  if (minPriceDisplay > 0) {
    const valueMin = parseFloat(minPriceDisplay.value);
    if (!isNaN(valueMin)) {
      minPriceDisplay.textContent = formatRupiah(valueMin);
    }
  }
}

import formatRupiah from "/src/helpers/formatRupiah.js";

const colorData = [
  { color: "#ffccea", name: "Pink" },
  { color: "#feee91", name: "Yellow" },
  { color: "#4cc9fe", name: "Blue" },
];

export default function productDetailInfo() {
  // ----- Format Rupiah ----- //
  const toFormatRupiah = document.querySelectorAll(
    ".product-detail-info .info-headers .price-final, .product-detail-info .info-headers .price-original"
  );

  toFormatRupiah.forEach((price) => {
    const priceText = parseFloat(price.textContent);
    price.textContent = formatRupiah(priceText);
  });

  // ----- Color List ----- //
  const colorList = document.querySelector(".info-colors .color-list");
  const colorNote = document.createElement("div");
  colorNote.classList.add("color-list-note");

  colorNote.textContent = colorData[0].name;

  colorData.forEach((data) => {
    const colorItem = document.createElement("div");
    colorItem.classList.add("color-list-item");
    colorItem.style.backgroundColor = data.color;

    colorItem.addEventListener("click", () => {
      colorNote.textContent = data.name;
    });

    colorList.appendChild(colorItem);
  });

  colorList.appendChild(colorNote);

  // ----- Size ----- //
  const sizeList = document.querySelector(".info-sizes .size-list");
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("size-list-item")) {
      const sizeItem = e.target;
      const sizeItems = sizeList.querySelectorAll(".size-list-item");
      sizeItems.forEach((item) => {
        item.classList.remove("selected");
      });
      sizeItem.classList.add("selected");
    }
  });
}

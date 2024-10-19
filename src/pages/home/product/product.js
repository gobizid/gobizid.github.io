import formatRupiah from "../../../helpers/formatrupiah.js";

export default function product() {
  const pricesDiscounts = document.querySelectorAll(
    "section.product .product-wrapper .price, section.product .product-wrapper .discount"
  );

  pricesDiscounts.forEach((el) => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      el.textContent = formatRupiah(value);
    }
  });
}

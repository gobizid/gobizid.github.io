import formatRupiah from "../../../helpers/formatrupiah.js";

export default function product() {
  const prices = document.querySelectorAll(
    "section.product .product-wrapper .price"
  );
  const discounts = document.querySelectorAll(
    "section.product .product-wrapper .discount"
  );

  prices.forEach((el) => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      el.textContent = formatRupiah(value);
    }
  });

  discounts.forEach((el) => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      el.textContent = formatRupiah(value);
    }
  });
}

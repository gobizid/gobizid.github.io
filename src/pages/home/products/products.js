import formatRupiah from "/src/helpers/formatRupiah.js";

export default function products() {
  const pricesDiscounts = document.querySelectorAll(
    ".home .products .price, .home .products .discount"
  );

  pricesDiscounts.forEach((el) => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      el.textContent = formatRupiah(value);
    }
  });
}

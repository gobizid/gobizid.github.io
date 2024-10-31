import formatRupiah from "/src/helpers/formatRupiah.js";

export default function productDetailInfo() {
  const toFormatRupiah = document.querySelectorAll(
    ".product-detail-info .info-header .price-final, .product-detail-info .info-header .price-original"
  );

  toFormatRupiah.forEach((price) => {
    const priceText = parseFloat(price.textContent);
    price.textContent = formatRupiah(priceText);
  });
}

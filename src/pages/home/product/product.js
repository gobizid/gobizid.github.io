export default function product() {
  const price = document.querySelectorAll(
    "section.product .product-wrapper .price"
  );
  const discount = document.querySelectorAll(
    "section.product .product-wrapper .discount"
  );

  function formatCurrency(value) {
    return value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  price.forEach((el) => {
    const value = parseFloat(el.textContent);
    el.textContent = formatCurrency(value);
  });

  discount.forEach((el) => {
    const value = parseFloat(el.textContent);
    el.textContent = formatCurrency(value);
  });
}

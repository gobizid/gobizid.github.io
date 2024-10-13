export default function catalog() {
  const price = document.querySelectorAll(
    "section.catalog .catalog-wrapper .price"
  );
  const discount = document.querySelectorAll(
    "section.catalog .catalog-wrapper .discount"
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

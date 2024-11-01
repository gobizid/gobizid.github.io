export default function formatRupiah(value) {
  if (value == null || value === "" || isNaN(value) || value === undefined) {
    value = 0;
  }

  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

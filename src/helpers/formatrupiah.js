export default function formatRupiah(value) {
  if (isNaN(value)) return "-";

  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

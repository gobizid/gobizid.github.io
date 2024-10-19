export default function address() {
  document.querySelectorAll(".filter-address-list > div").forEach((filter) => {
    filter.addEventListener("click", function () {
      document.querySelectorAll(".filter-address-list > div").forEach((f) => {
        if (f !== this) {
          f.classList.remove("expanded");
        }
      });
      this.classList.toggle("expanded");
    });
  });
}

export default function productDetailHeader() {
  const menusItem = document.querySelectorAll(
    ".product-detail-header .menu .menu-item"
  );

  menusItem.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      const activeMenuItem = document.querySelector(
        ".product-detail-header .menu .menu-item.active"
      );

      activeMenuItem.classList.remove("active");
      menuItem.classList.add("active");
    });
  });
}

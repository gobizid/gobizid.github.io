export default function sidebarToggle() {
  const menuItems = document.querySelectorAll("aside.navigation .menu-item");
  
  if (menuItems) {
    menuItems.forEach((menu) => {
      menu.addEventListener("click", function (e) {
        const menuName = this.getAttribute("data-menu");

        if (menuName === "management-product") {
          e.preventDefault();
          window.location.href = "/table-product";

          sessionStorage.setItem("activeSubmenu", "management-product-submenu");
        } else {
          console.log(`Navigasi ke ${menuName} tidak memiliki pengaturan khusus.`);
        }
      });
    });
  }
}

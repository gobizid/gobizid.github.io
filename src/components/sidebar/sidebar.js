export default function sidebarTogle() {

  const menuItems = document.querySelectorAll("aside.navigation .menu-item");
  if (menuItems) {
    menuItems.forEach((menu) => {
      menu.addEventListener("click", function (e) {
        e.preventDefault();
        const menuName = this.getAttribute("data-menu");

        document
          .querySelectorAll(".app-header .app-header-navigation .submenu")
          .forEach((submenu) => {
            submenu.style.display = "none";
          });

        const activeSubmenu = document.querySelector(`.${menuName}-submenu`);
        if (activeSubmenu) {
          activeSubmenu.style.display = "flex";
        }
      });
    });
  }
}
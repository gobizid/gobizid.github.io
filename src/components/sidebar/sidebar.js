export default function sidebarTogle() {
  const list = document.querySelectorAll(
    ".app-header .app-header-navigation .submenu a"
  );

  function setActiveLinkByUrl(links) {
    const currentPath = window.location.pathname;
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  setActiveLinkByUrl(list);

  const menuItems = document.querySelectorAll("aside.navigation .menu-item");
  if (menuItems) {
    menuItems.forEach((menu) => {
      menu.addEventListener("click", function (e) {
        const menuName = this.getAttribute("data-menu");

        localStorage.setItem("activeMenu", menuName);
      });
    });
  }

  const activeMenu = localStorage.getItem("activeMenu");
  if (activeMenu) {
    document
      .querySelectorAll(".app-header .app-header-navigation .submenu")
      .forEach((submenu) => {
        submenu.style.display = "none";
      });

    const activeSubmenu = document.querySelector(`.${activeMenu}-submenu`);
    if (activeSubmenu) {
      activeSubmenu.style.display = "flex";
    }
  }
}

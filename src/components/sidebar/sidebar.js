export default function sidebarTogle() {
  const menuItems = document.querySelectorAll("aside.navigation .menu-item");
  if (menuItems) {
    menuItems.forEach((menu) => {
      menu.addEventListener("click", function (e) {
        const menuName = this.getAttribute("data-menu");

        // Simpan menu yang aktif di localStorage
        localStorage.setItem("activeMenu", menuName);
      });
    });
  }

  // Ketika halaman di-load, ambil nilai activeMenu dari localStorage dan tampilkan submenu yang sesuai
  const activeMenu = localStorage.getItem("activeMenu");
  if (activeMenu) {
    // Sembunyikan semua submenu terlebih dahulu
    document
      .querySelectorAll(".app-header .app-header-navigation .submenu")
      .forEach((submenu) => {
        submenu.style.display = "none";
      });

    // Tampilkan submenu yang aktif
    const activeSubmenu = document.querySelector(`.${activeMenu}-submenu`);
    if (activeSubmenu) {
      activeSubmenu.style.display = "flex";
    }
  }
}

export default function sidebarTogle() {
  const componentsToggle = document.querySelector(".components-toggle");
  const componentsSubmenu = document.getElementById("components-submenu");

  componentsToggle.addEventListener("click", function () {
    componentsSubmenu.classList.toggle("active");
    componentsToggle.classList.toggle("active");
  });
}

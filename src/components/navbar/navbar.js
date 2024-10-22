export default function navbar() {
  const list = document.querySelectorAll("header .nav .nav-main .links a");

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

  // ----- Display Logout Button ----- //
  const loginCookie = window.Cookies.get("login"); // Access Cookies from window object
  const logoutButton = document.querySelector(".nav-others .logout");

  if (logoutButton) {
    if (loginCookie) {
      logoutButton.style.display = "inline-block";
    } else {
      logoutButton.style.display = "none";
    }

    // ----- Logout ----- //
    logoutButton.addEventListener("click", () => {
      window.Cookies.remove("login"); // Use window.Cookies to remove cookie
      window.location.href = "/login";
    });
  }
}

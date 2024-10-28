import Cookies from "js-cookie";

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
  const loginCookie = Cookies.get("login"); // Access Cookies from window object
  const logoutButton = document.querySelector(".nav-others .logout");
  const loginButton = document.querySelector(".nav-others .to-login");

  if (logoutButton) {
    if (loginCookie) {
      logoutButton.style.display = "inline-block";
      loginButton.style.display = "none";
    } else {
      logoutButton.style.display = "none";
      loginButton.style.display = "inline-block";
    }

    // ----- Logout ----- //
    logoutButton.addEventListener("click", () => {
      window.Cookies.remove("login"); // Use window.Cookies to remove cookie
      window.location.href = "/login";
    });
  }
}

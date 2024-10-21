import loadHome from "./src/pages/home/home.js";
import loadCatalog from "./src/pages/catalog/catalog.js";
import loadLogin from "./src/pages/login/login.js";
import loadRegister from "./src/pages/register/register.js";
import loadLoginQr from "./src/pages/login-qr/loginQr.js";

function loadPage(path) {
  const main = document.getElementById("main");
  main.innerHTML = "";

  let pageUrl;
  switch (path) {
    case "/":
      pageUrl = "/src/pages/home/home.html";
      break;
    case "/catalog":
      pageUrl = "/src/pages/catalog/catalog.html";
      break;
    case "/login":
      pageUrl = "/src/pages/login/login.html";
      break;
    case "/register":
      pageUrl = "/src/pages/register/register.html";
      break;
    case "/login-qr":
      pageUrl = "/src/pages/login-qr/login-qr.html";
      break;
    // default:
    // pageUrl = "./pages/404.html";
    //   break;
  }

  // Memuat halaman dari URL yang ditentukan
  if (pageUrl) {
    fetch(pageUrl)
      .then((response) => response.text())
      .then((data) => {
        main.innerHTML = data;
        if (path === "/") {
          loadHome();
        } else if (path === "/catalog") {
          loadCatalog();
        } else if (path === "/login") {
          loadLogin();
        } else if (path === "/register") {
          loadRegister();
        } else if (path === "/login-qr") {
          loadLoginQr();
        }
      })
      .catch((error) => {
        main.innerHTML = "<p>Error loading page.</p>";
        console.error("Error loading page:", error);
      });
  }
}

function navigate(path) {
  window.history.pushState({}, "", path);
  loadPage(path);
}

window.addEventListener("popstate", () => {
  loadPage(window.location.pathname);
});

window.addEventListener("load", () => {
  loadPage(window.location.pathname || "/");
});

document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target && target.matches(".to-link")) {
    e.preventDefault();
    const path = target.getAttribute("href");
    navigate(path);
  }
});

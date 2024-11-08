import loadHome from "/src/pages/home/home.js";
import loadCatalog from "/src/pages/catalog/catalog.js";
import loadLogin from "/src/pages/login/login.js";
import loadRegister from "/src/pages/register/register.js";
import loadLoginQr from "/src/pages/login-qr/loginQr.js";
import loadDashboard from "/src/pages/dashboard/dashboard.js";
import loadProductDetail from "/src/pages/product-detail/productDetail.js";
import loadManagementProduct from "/src/pages/management-product/managementProduct.js";
import loadManagementProductCategories from "/src/pages/management-product/categories/categories.js";
import loadManagementProductCategoriesInsert from "/src/pages/management-product/categories/insert/insert.js";
import loadManagementProductCategoriesUpdate from "/src/pages/management-product/categories/update/update.js";
import loadMap from "/src/pages/map/map.js";


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
    case "/product-detail":
      pageUrl = "/src/pages/product-detail/product-detail.html";
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
    case "/dashboard":
      pageUrl = "/src/pages/dashboard/dashboard.html";
      break;
    case "/management-product":
      pageUrl = "/src/pages/management-product/management-product.html";
      break;
    case "/management-product/categories":
      pageUrl = "/src/pages/management-product/categories/categories.html";
      break;
    case "/management-product/categories-insert":
      pageUrl = "/src/pages/management-product/categories/insert/insert.html";
      break;
    case "/management-product/categories-update":
      pageUrl = "/src/pages/management-product/categories/update/update.html";
      break;
    case "/map":
      pageUrl = "/src/pages/map/map.html";
      break;
    // default:
    // pageUrl = "/pages/404.html";
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
        } else if (path === "/product-detail") {
          loadProductDetail();
        } else if (path === "/login") {
          loadLogin();
        } else if (path === "/register") {
          loadRegister();
        } else if (path === "/login-qr") {
          loadLoginQr();
        } else if (path == "/dashboard") {
          loadDashboard();
        } else if (path == "/table-product") {
          loadDashboardTable();
        } else if (path == "/management-product") {
          loadManagementProduct();
        } else if (path == "/management-product/categories") {
          loadManagementProductCategories();
        } else if (path == "/management-product/categories-insert") {
          loadManagementProductCategoriesInsert();
        } else if (path == "/management-product/categories-update") {
          loadManagementProductCategoriesUpdate();
        } else if (path == "/map") {
          loadMap();
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

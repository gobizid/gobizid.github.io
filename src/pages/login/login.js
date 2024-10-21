import smoothScroll from "/src/helpers/smoothScroll.js";
import fetchLog from "/src/pages/login/fetchlog.js";
import loadComponent from "/src/helpers/loadComponent.js";

export default function loadLogin() {
  const promise = loadComponent("", "/src/pages/login/login.html");

  promise
    .then(() => {
      smoothScroll();
      fetchLog();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

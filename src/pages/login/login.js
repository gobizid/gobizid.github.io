import smoothScroll from "../../helpers/smoothScroll.js";
import fetchLog from "./fetchlog.js";
import loadComponent from "../../helpers/loadComponent.js";

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

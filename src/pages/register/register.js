import smoothScroll from "../../helpers/smoothScroll.js";
import fetchReg from "./fetchreg.js";
import loadComponent from "../../helpers/loadComponent.js";

export default function loadRegister() {
  const promise = loadComponent("", "/src/pages/register/register.html");

  promise
    .then(() => {
      smoothScroll();
      fetchReg();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

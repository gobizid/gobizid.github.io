import smoothScroll from "/src/helpers/smoothScroll.js";
import fetchReg from "/src/pages/register/fetchreg.js";
import loadComponent from "/src/helpers/loadComponent.js";

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

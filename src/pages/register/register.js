import smoothScroll from "../../helpers/smoothscroll.js";
import fetchReg from "./fetchreg.js";

export default function register() {
  smoothScroll();
  fetchReg();

  const pwShowHide = document.querySelectorAll(".eye-icon");

  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      let pwFields =
        eyeIcon.parentElement.parentElement.querySelectorAll(".password");
      pwFields.forEach((password) => {
        if (password.type === "password") {
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      });
    });
  });
}

register();

let list = document.querySelectorAll("header nav .nav-links a");
function handleNavItemClick(anu) {
  for (let i = 0; i < anu.length; i++) {
    anu[i].onclick = function () {
      let j = 0;
      while (j < anu.length) {
        anu[j++].classList.remove("active");
      }
      anu[i].classList.add("active");
    };
  }
}
handleNavItemClick(list);

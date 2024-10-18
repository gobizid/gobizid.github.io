export default function navbar() {
  let list = document.querySelectorAll("header .nav .nav-main .links a");

  function setActiveLinkByUrl(links) {
    const currentPath = window.location.pathname;
    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute("href") === currentPath) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    }

    console.log(currentPath);
  }

  setActiveLinkByUrl(list);
}

// export default function navbar() {
//   let list = document.querySelectorAll("header .nav .nav-main .links a");

//   function setActiveLinkByUrl(links) {
//     const currentPath = window.location.pathname;
//     for (let i = 0; i < links.length; i++) {
//       const linkPath = new URL(links[i].href).pathname;
//       if (linkPath === currentPath) {
//         links[i].classList.add("active");
//       } else {
//         links[i].classList.remove("active");
//       }
//     }
//   }

//   setActiveLinkByUrl(list);
// }

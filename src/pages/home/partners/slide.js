export default function slide() {
  const logoSlide = document.querySelector(".logo-slide");
  if (logoSlide) {
    const clone = logoSlide.cloneNode(true);
    logoSlide.parentNode.appendChild(clone);
  } else {
    console.error("Element '.logo-slide' not found.");
  }
}

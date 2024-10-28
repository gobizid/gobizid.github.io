export default function smoothScroll() {
  // Initialize Lenis
  const lenis = new Lenis({
    easing: easeOutSine,
    duration: 2,
  });

  function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
  }

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {});

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default function members() {
  const counters = document.querySelectorAll(".counter span");
  const container = document.querySelector(".counters");

  let activated = false;
  const animationDuration = 10000;

  window.addEventListener("scroll", () => {
    const containerPosition = container.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > containerPosition && activated === false) {
      const maxCount = Math.max(...Array.from(counters).map(counter => parseInt(counter.dataset.count)));

      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.count);
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / animationDuration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          
          const currentValue = Math.ceil(easedProgress * target);
          counter.innerText = currentValue;

          if (elapsedTime < animationDuration) {
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        }

        requestAnimationFrame(updateCount);
      });

      activated = true;
    }
  });
}

export default function loadComponent(selector, url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then((html) => {
      if (selector) {
        const element = document.querySelector(selector);
        if (element) {
          element.innerHTML = html;
        } else {
          console.error("Selector not found:", selector);
        }
      } else {
        console.warn("Selector is empty, skipping component load.");
      }
    })
    .catch((error) => {
      console.error("Error loading component:", error);
    });
}

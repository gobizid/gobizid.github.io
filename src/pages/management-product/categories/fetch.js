function toggleOptions() {
  const items = document.querySelectorAll(".content-main .item");

  items.forEach((item) => {
    const toggleButton = item.querySelector(".material-symbols-outlined");
    const toggleContainer = item.querySelector(".toggle");

    toggleButton.addEventListener("click", (e) => {
      toggleContainer.classList.toggle("active");
      e.stopPropagation();
    });

    document.addEventListener("click", (e) => {
      if (
        !toggleContainer.contains(e.target) &&
        !toggleButton.contains(e.target)
      ) {
        toggleContainer.classList.remove("active");
      }
    });
  });
}

export default function getAllCateogories() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/menu/category",
    requestOptions
  ).then(async (res) => {
    const status = res.status;
    const result = await res.json();

    console.log(result);

    if (status === 200) {
      const categoriesList = document.querySelector(
        ".management-product-categories .content-main"
      );

      result.sort((a, b) => a.name_category.localeCompare(b.name_category));

      if (categoriesList) {
        const duplicationCount = 3;

        categoriesList.innerHTML = result
          .flatMap((category) =>
            Array(duplicationCount).fill(
              `<div class="item">
                  <i class="${category.icon}"></i>
                  <div class="item-name">${category.name_category}</div>
                  <span class="material-symbols-outlined"> more_vert </span>
                  <div class="toggle">
                      <a
                          href="/management-product/categories-update"
                              class="toggle-option to-link"
                       >
                          Edit
                      </a>
                      <div class="toggle-option">Delete</div>
                  </div>
              </div>`
            )
          )
          .join("");

        toggleOptions();
      } else {
        console.error(
          "Element .management-product-categories .content-main tidak ditemukan."
        );
      }
    }
  });
}

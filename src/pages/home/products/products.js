import formatRupiah from "/src/helpers/formatRupiah.js";

export default function products() {
  const pricesDiscounts = document.querySelectorAll(
    ".home .products .price, .home .products .discount"
  );

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/menu",
    requestOptions
  )
    .then(async (res) => {
      const status = res.status;
      const result = await res.json();

      console.log(result);
      if (status === 200) {
        const products = document.querySelector(".home .products");

        result.data.forEach((product) => {
          const productsWrapper = document.createElement("div");
          productsWrapper.classList.add("products-wrapper");

          const imageClass = document.createElement("div");
          imageClass.classList.add("image");
          const image = document.createElement("img");
          image.src = product.image;
          image.alt = product.menu;
          imageClass.appendChild(image);

          const nameClass = document.createElement("div");
          nameClass.classList.add("menu");
          nameClass.textContent = product.menu;

          const priceClass = document.createElement("div");
          priceClass.classList.add("price");
          priceClass.textContent = formatRupiah(product.price);

          const discountClass = document.createElement("div");
          discountClass.classList.add("discount");
          discountClass.textContent = formatRupiah(product.diskon);

          const ratingSoldClass = document.createElement("div");
          ratingSoldClass.classList.add("rating-sold");
          ratingSoldClass.textContent = `⭐${product.rating} | ${product.sold} terjual`;

          productsWrapper.appendChild(imageClass);
          productsWrapper.appendChild(nameClass);
          productsWrapper.appendChild(priceClass);
          productsWrapper.appendChild(discountClass);
          productsWrapper.appendChild(ratingSoldClass);

          products.appendChild(productsWrapper);
        });
      } else {
        console.error("Failed to fetch products:", status);
      }
    })
    .catch((error) => console.error("Error:", error));

  pricesDiscounts.forEach((el) => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      el.textContent = formatRupiah(value);
    }
  });
}

import formatRupiah from "/src/helpers/formatRupiah.js";

export default function dataproduct() {
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

      console.log(result);  // Log untuk memeriksa data yang diterima

      if (status === 200) {
        // Seleksi elemen .product-list
        const products = document.querySelector(".product-dashboard .product-list");

        if (products) {
          // Loop untuk setiap produk yang ada di data API
          result.data.forEach((product) => {
            const productsWrapper = document.createElement("div");
            productsWrapper.classList.add("product-item");

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

            // Menambahkan elemen ke wrapper
            productsWrapper.appendChild(imageClass);
            productsWrapper.appendChild(nameClass);
            productsWrapper.appendChild(priceClass);
            productsWrapper.appendChild(discountClass);
            productsWrapper.appendChild(ratingSoldClass);

            // Menambahkan wrapper ke dalam .product-list
            products.appendChild(productsWrapper);
          });
        } else {
          console.error('Product list container tidak ditemukan!');
        }
      } else {
        console.error("Gagal mengambil data produk:", status);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

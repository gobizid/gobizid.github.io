import formatRupiah from "/src/helpers/formatRupiah.js";

export default function dataproduct() {
  const productContainer = document.querySelector(".product-list");

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
        result.data.forEach((product) => {
          const productItem = document.createElement("div");
          productItem.classList.add("product-item");

          const img = document.createElement("img");
          img.src = product.image || "https://via.placeholder.com/150"; // fallback if image is missing
          img.alt = product.menu;
          productItem.appendChild(img);

          const title = document.createElement("h2");
          title.textContent = product.menu;
          productItem.appendChild(title);

          const description = document.createElement("p");
          description.textContent = product.description || "Deskripsi tidak tersedia.";
          productItem.appendChild(description);

          const price = document.createElement("div");
          price.classList.add("price");
          price.textContent = `Harga: ${formatRupiah(product.price)}`;
          productItem.appendChild(price);

          const discount = document.createElement("div");
          discount.classList.add("discount");
          discount.textContent = `Diskon: ${formatRupiah(product.diskon)}`;
          productItem.appendChild(discount);

          const createdDate = document.createElement("span");
          createdDate.innerHTML = `Tanggal Dibuat: <strong>${product.created_at || "N/A"}</strong>`;
          productItem.appendChild(createdDate);

          const buttonGroup = document.createElement("div");
          buttonGroup.classList.add("button-group");

          const editButton = document.createElement("button");
          editButton.classList.add("btn", "edit");
          editButton.textContent = "Edit";
          buttonGroup.appendChild(editButton);

          const deleteButton = document.createElement("button");
          deleteButton.classList.add("btn", "delete");
          deleteButton.textContent = "Delete";
          buttonGroup.appendChild(deleteButton);

          productItem.appendChild(buttonGroup);

          productContainer.appendChild(productItem);
        });
      } else {
        console.error("Failed to fetch products:", status);
      }
    })
    .catch((error) => console.error("Error:", error));
}

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

//=======================================================================================================

const displayContent = products => {
  products.forEach((product, index) => {
    let productDiv = `
    <div onclick="showDescription(${index})" class="card">
            <img src="${product.image}" class="card-img-top" alt="..." />
            <div id="card-home" class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p id="color-product" class="card-text">${product.color}</p>
              <p class="card-text">
               ${formatter.format(product.price)}
              </p>
            </div>
          </div>
    `;

    document.getElementById("object").innerHTML += productDiv;
  });
};
displayContent(products);

const showDescription = product => {
  window.location.href = "/description";
  localStorage.setItem("selectedProducts", JSON.stringify(products[product]));
};

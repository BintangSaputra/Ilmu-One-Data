const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

//=======================================================================================================

const displayContent = products => {
  products.forEach(product => {
    let productDiv = `
    <div class="card">
            <img src="${product.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.color}</p>
              <p class="card-text">
               ${product.price}
              </p>
            </div>
          </div>
    `;

    document.getElementById("object").innerHTML += productDiv;
  });
};
displayContent(product);

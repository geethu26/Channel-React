const url = "http://localhost:3001/clothstore";

function fetchProducts() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // not important part just for checking
      console.log("Updated product list:");
      data.forEach((product) => {
        console.log(
          `${product.id}, ${product.name}, ${product.category}, ${product.size}, ${product.price}, ${product.inStock} `
        );
      });
      //checking
    });
}

setInterval(fetchProducts, 5000);
fetchProducts();

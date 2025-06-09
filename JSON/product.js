//Display product details in console
const fs = require("fs");
const dataJSON = fs.readFileSync("products.json");
const data = JSON.parse(dataJSON);
const products = data.products;
console.log(products);
products.forEach((product) => {
  console.log(`ID:${product.id}`);
  console.log(`Name:${product.name}`);
  console.log(`Price:${product.price}`);
});

const form = document.getElementById("productForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("productName").value.trim();
  const description = document
    .getElementById("productDescription")
    .value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const image = document.getElementById("productImage").value.trim();

  const newProduct = { name, description, price, iamge };

  const existingProducts =
    JSON.parse(localStorage.getItem("productList")) || [];
  existingProducts.push(newProduct);
  localStorage.setItem("productList", JSON.stringyfy(existingProducts));

  alert("Product added successfully");

  form.reset();
  window.location.href = "admin-dashboard.html";
});

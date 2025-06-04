const products = [
  {
    id: 1,
    name: "Laptop",
    price: 750,
    rating: 4.5,
    category: "Electronics",
    stock: 12,
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    rating: 4.7,
    category: "Electronics",
    stock: 20,
  },
  {
    id: 3,
    name: "Tablet",
    price: 600,
    rating: 4.3,
    category: "Electronics",
    stock: 8,
  },
  {
    id: 4,
    name: "Monitor",
    price: 300,
    rating: 4.2,
    category: "Accessories",
    stock: 15,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 50,
    rating: 4.0,
    category: "Accessories",
    stock: 30,
  },
  {
    id: 6,
    name: "Mouse",
    price: 25,
    rating: 3.9,
    category: "Accessories",
    stock: 50,
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 200,
    rating: 4.4,
    category: "Wearables",
    stock: 10,
  },
  {
    id: 8,
    name: "Earphones",
    price: 80,
    rating: 4.1,
    category: "Wearables",
    stock: 19,
  },
  {
    id: 9,
    name: "Mic",
    price: 100,
    rating: 3.4,
    category: "Acessories",
    stock: 6,
  },
];

//Current filter/sort
let currentCategory = "All";
let currentSort = "";

//DOM Elements
const productGrid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".category-btn");

function renderProduct(list) {
  productGrid.innerHTML = "";

  if (list.length == 0) {
    productGrid.innerHTML = "<p>No product found</p>";
    return;
  }

  list.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <div class="product-name">${prod.name}</div>
    <div class="product-category">${prod.category}</div>
    <div class="product-price">$${prod.price}</div>
    <div class="product-rating">⭐${prod.rating}</div>
    <div class="product-rating">Stock:${prod.stock}</div>
    `;
    productGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  //Filter by category
  if (currentCategory != "All") {
    filtered = filtered.filter((prod) => prod.category === currentCategory);
  }
  //Sort
  switch (currentSort) {
    case "priceAsc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceDes":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "nameAsc":
      filtered.sort((a, b) => a.name.localeComapre(b.name));
      break;
    case "nameDesc":
      filtered.sort((a, b) => b.name.localeComapre(a.name));
      break;
    case "ratingAsc":
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    case "ratingDesc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "stockAsc":
      filtered.sort((a, b) => a.stock - b.stock);
      break;
    case "stockDesc":
      filtered.sort((a, b) => b.stock - a.stock);
      break;
  }

  renderProduct(filtered);
}

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  applyFilters();
});

applyFilters();

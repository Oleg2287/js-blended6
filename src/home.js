//Логіка сторінки Home
// https://dummyjson.com/products/category-list //отримати список категорій
// https://dummyjson.com/products/category/smartphones //отримати продукти певної категорії
// https://dummyjson.com/products?limit=10&skip=0 //отримати продукти з пагінацією
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com"; // Встановлення базового URL для всіх запитів

const categoriesList = document.querySelector(".categories");

async function getProductCategories() {
  const response = await axios.get("/products/category-list");
  return response.data;
}

getProductCategories();

function renderCategoriesMarkup(arr) {
  const markup = arr.map(
      (element) =>
        `<li class="category-item">
      <button class="category-btn" type="button">${element}</button>
  </li>`
    )
    .join("");
    categoriesList.innerHTML = markup;
}

async function renderCategories() {
    const categories = await getProductCategories();
    const allCategories = ["All", ...categories];
    renderCategoriesMarkup(allCategories);
}

renderCategories();

// Приклади інших запитів:

// async function getProductsByCategory(category) {
//   const response = await axios.get(`/products/category/${category}`);
//   return response.data;
// }

// async function getProducts(limit, skip) {
//   const response = await axios.get(`/products?limit=${limit}&skip=${skip}`);
//   return response.data;
// }

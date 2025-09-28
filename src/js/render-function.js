export function renderProductsMarkup(arr) {
  const markup = arr.map(
    (product) => <li class="products__item" data-id="">
    <img class="products__image" src="${product.imageUrl}" alt="${product.title}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${product.brand}</p>
    <p class="products__category">Category: ${product.category}</p>
    <p class="products__price">Price: $${product.price}</p>
 </li>

  ).join("");
  document.querySelector(".products-list").innerHTML = markup;
}

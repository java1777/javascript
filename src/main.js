const productInputElement = document.getElementById("product");
const addBtnElement = document.getElementById("add-btn");
const listElement = document.getElementById("list");

window.addEventListener("load", () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.forEach((product) => {
    const newItem = document.createElement("li");
    newItem.textContent = product;
    listElement.appendChild(newItem);
  });
});

addBtnElement.addEventListener("click", () => {
  const value = productInputElement.value.trim();

  if (value) {
    const newItem = document.createElement("li");
    newItem.textContent = value;
    listElement.appendChild(newItem);

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(value);
    localStorage.setItem("products", JSON.stringify(products));

    productInputElement.value = "";
  }
});

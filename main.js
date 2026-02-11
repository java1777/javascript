// 28 chidigi uy ishi bu ustoz
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=32");

    if (!res.ok) {
      throw new Error("Server error: " + res.status);
    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("err", error);
    return [];
  }
}

async function writeProducts() {
  const productsListElement = document.getElementById("products-list");

  if (!productsListElement) {
    console.error("products-list topilmadi");
    return;
  }

  try {
    const products = await getProducts();

    products.forEach((element) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const cardImageElement = document.createElement("div");
      cardImageElement.classList.add("card__image");

      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", element.images[0]);
      cardImageElement.appendChild(cardImage);

      const cardInfoElement = document.createElement("div");
      cardInfoElement.classList.add("card__info");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card__title");
      cardTitle.textContent = element.title;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("card__price");
      cardPrice.textContent = element.price;

      cardInfoElement.appendChild(cardTitle);
      cardInfoElement.appendChild(cardPrice);

      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardInfoElement);
      productsListElement.appendChild(cardElement);
    });
  } catch (error) {
    console.error(error);
  }
}

writeProducts();

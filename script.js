const products = [
    { name: "Laptop backpack", price: 30, quantity: 2 },
    { name: "Headphones", price: 20, quantity: 1 },
  ];
  
  const ul = document.querySelector("ul");
  const total = document.querySelector(".total span");
  
  let totalPrice = 0;
  
  products.forEach((product) => {
    totalPrice += product.price * product.quantity;
  
    const li = createProduct(product);
    const minusButton = li.querySelector(".minus-button");
    const plusButton = li.querySelector(".plus-button");
    const deleteButton = li.querySelector(".delete-button");
   
   
  
    minusButton.onclick = () => minusQuantity(li, product.price);
    plusButton.onclick = () => plusQuantity(li, product.price);
    deleteButton.onclick = () => deleteLi(li);
   
   
  
    ul.appendChild(li);
  });
  
  total.innerHTML = totalPrice;
  
  function createProduct(product) {
    const li = document.createElement("li");
  
    li.innerHTML = `
    <p>${product.name}</p>
    <p>$<span class="price">${product.price * product.quantity}</span></p>
    <button class="minus-button">-</button>
    <p  class="quantity">${product.quantity}</p>
    <button class="plus-button">+</button>
    <button class="delete-button">x</button>
    `;
  
    return li;
  }
  
  function minusQuantity(li, unitPrice) {
    const priceEl = li.querySelector(".price");
    let price = parseInt(priceEl.innerHTML);
  
    const quantityEl = li.querySelector(".quantity");
    let quantity = parseInt(quantityEl.innerHTML);
  
    if (quantity > 1) {
      quantity--;
      quantityEl.innerHTML = quantity;
      price -= unitPrice;
      totalPrice -= unitPrice;
      total.innerHTML = totalPrice;
      priceEl.innerHTML = price;
    }
  }
  
  function plusQuantity(li, unitPrice) {
    const priceEl = li.querySelector(".price");
    let price = parseInt(priceEl.innerHTML);
  
    const quantityEl = li.querySelector(".quantity");
    let quantity = parseInt(quantityEl.innerHTML);
  
    quantity++;
    quantityEl.innerHTML = quantity;
    price += unitPrice;
    totalPrice += unitPrice;
    total.innerHTML = totalPrice;
    priceEl.innerHTML = price;
  }
  
  function deleteLi(li) {
    const price = parseInt(li.querySelector(".price").innerHTML);
    totalPrice -= price;
    total.innerHTML = totalPrice;
    ul.removeChild(li);
  }

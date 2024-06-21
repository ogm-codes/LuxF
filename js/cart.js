//console.log("new item");

const product = [
  { id: 1, name: "Wooden Cups", image: "/img/product-19.jpeg", price: 900 },
  { id: 2, name: "Heater", image:"/img/designer_heater.jpeg", price: 1200},
  { id: 3, name: "Art Deco Home", image:"/img/product-2.jpeg", price: 350},
  { id: 4, name: "Artificial potted plant", image:"/img/product-3.jpeg", price: 450},
  { id: 5, name: "Dark Green Jug", image:"/img/product-4.jpeg", price: 170},
  { id: 6, name: "Drinking Glasses", image:"/img/product-5.jpeg", price: 200},
  { id: 7, name: "Helen Chair", image:"/img/product-6.jpeg", price: 700},
  { id: 8, name: "High Quality Glass Bottle", image:"/img/product-7.jpeg", price: 300},
  { id: 9, name: "Bedroom lights Chair", image:"/img/product-9.jpeg", price: 3000},
  { id: 10, name: "Nancy Chair", image:"/img/product-10.jpeg", price: 1300},
  { id: 11, name: "Samsung TV 55-INCH", image:"/img/55samsung.jpg", price: 10500},
  { id: 12, name: "Smooth Disk", image:"/img/product-11.jpeg", price: 250},
  { id: 13, name: "Table Black", image:"/img/product-12.jpeg", price: 6750},
  { id: 14, name: "Table Wood Pine", image:"/img/product-13.jpeg", price: 1200},
  { id: 15, name: "Teapot with Black Tea", image:"/img/product-14.jpeg", price: 800},
  { id: 16, name: "Unique Deco", image:"/img/product-15.jpeg", price: 350},
  { id: 17, name: "Vase of flowers", image:"/img/product-16.jpeg", price: 6000},
  { id: 18, name: "Wood Eggs", image:"/img/product-17.jpeg", price: 150},
  { id: 19, name: "Wooden Box", image:"/img/product-18.jpeg", price: 270}

];

let cart = [];


const addToCartButtons = document.querySelectorAll(".inner-cart-action-btn");

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    const product = products[index]; // Find product object by ID
    cart.push(product); // Add product to cart array
    updateCartDisplay(); // Update the cart display dynamically
  });
});

function updateCartDisplay() {
  const cartContainer = document.querySelector(".cart-orders");
  cartContainer.innerHTML = ""; // Clear previous content

  cart.forEach(product => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-order");

    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="order-details">
        <p class="order-description">${product.name}</p>
        <p class="order-price">R${product.price}.00</p>
        <span class="remove-order">
          <i class="fas fa-remove"></i>
        </span>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });
}

updateCartDisplay();


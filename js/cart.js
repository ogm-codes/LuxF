/** Shopping cart modal */

// references to the buttons in header
const favoriteButton = document.querySelector('.favourite-action-btn[aria-label="favorite list"]');
const cartButton = document.querySelector('.cart-action-btn[aria-label="cart"]');
// reference to inner product buttons
const innerFavbtn = document.querySelector('.inner-fav-action-btn[aria-label="add to whishlist"]');
const innerCartbtn = document.querySelector('.inner-cart-action-btn[aria-label="add to cart"]');
//Main product
const productCard = document.querySelectorAll('.product-card');
const productCardCartSelection = querySelector('.product-card');

function handleFavoriteClick() {
  console.log("Favorite button clicked!");
}

function handleCartClick() { 
  console.log("Cart button clicked!");
}

favoriteButton.addEventListener('click', handleFavoriteClick);
cartButton.addEventListener('click', handleCartClick);

function handleProductCard() {
  //const productName = document.querySelector('.card-title');
 // const productPrice = document.querySelector('.price');


  console.log("product clicked");
  //console.log(productName);
 // console.log(productPrice);

}

function cartFavourite() {
  
  const favBadge = document.querySelector('.fav-btn-badge');
  let favcount = localStorage.getItem('favCount') || 0;
  favcount++;
  favBadge.textContent = favcount;
  localStorage.setItem('favCount',favcount);

  console.log("fav product");
}

function cartOrder() {
  const cartBadge = document.querySelector('.cart-btn-badge');
  let cartCount = localStorage.getItem('cartCount') || 0;
  cartCount++;
  cartBadge.textContent = cartCount;
  localStorage.setItem('cartCount', cartCount);

  console.log("cart product");
}

function showCartOrders() {
  //Display cart with orders and confirm orders
}

innerFavbtn.addEventListener('click',cartFavourite);
innerCartbtn.addEventListener('click', cartOrder);
productCardCartSelection.addEventListener('',showCartOrders);

productCard.forEach(card => {
  card.addEventListener('click', handleProductCard);
});
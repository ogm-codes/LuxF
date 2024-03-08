/** Shopping cart modal */

// references to the buttons in header
const favoriteButton = document.querySelector('.favourite-action-btn[aria-label="favorite list"]');
const cartButton = document.querySelector('.cart-action-btn[aria-label="cart"]');
// reference to inner product buttons
const innerFavbtn = document.querySelector('.inner-fav-action-btn[aria-label="add to whishlist"]');
const innerCartbtn = document.querySelector('.inner-cart-action-btn[aria-label="add to cart"]');


function handleFavoriteClick() {
  console.log("Favorite button clicked!");
}

function handleCartClick() { 
  console.log("Cart button clicked!");
}

favoriteButton.addEventListener('click', handleFavoriteClick);
cartButton.addEventListener('click', handleCartClick);


// Product buttons
// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Function to handle button click
function handleProductCardButtonClick(event) {
  // Get the button that was clicked

  

 
}

// Add event listener to all product cards
productCards.forEach(card => {
  card.addEventListener('click', handleProductCardButtonClick);
});
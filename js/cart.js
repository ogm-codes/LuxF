/** Shopping cart modal */

// references to the buttons in header
const favoriteButton = document.querySelector('.header-action-btn[aria-label="favorite list"]');
const cartButton = document.querySelector('.header-action-btn[aria-label="cart"]');

function handleFavoriteClick() {
  // Add your desired functionality here, 
  console.log("Favorite button clicked!");
}

function handleCartClick() {
  // Add your desired functionality here, 
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
  const clickedButton = event.target;

  // Get the product card container
  const productCard = clickedButton.closest('.product-card');

  // Check which button was clicked based on the icon name
  switch (clickedButton.querySelector('ion-icon').name) {
    case 'add-outline':
      // Add to cart functionality
      console.log("Add to cart button clicked for product in", productCard);
      // Implement your logic for adding to cart, e.g., sending data to server or updating UI
      break;
    case 'heart-outline':
      // Add to wishlist functionality
      console.log("Add to wishlist button clicked for product in", productCard);
      // Implement your logic for adding to wishlist
      break;
    default:
      // Handle unexpected button click
      console.warn("Unknown button clicked:", clickedButton);
  }
}

// Add event listener to all product cards
productCards.forEach(card => {
  card.addEventListener('click', handleProductCardButtonClick);
});

/** Shopping cart modal */

// references to the buttons in header
const favoriteButton = document.querySelector('.favourite-action-btn[aria-label="favorite list"]');
const cartButton = document.querySelector('.cart-action-btn[aria-label="cart"]');

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
    case 'bag-handle-outline':
      // Add to cart functionality
      console.log("Add to cart button clicked for product in", productCard);
      
      break;
    case 'heart-outline':
      console.log("Add to wishlist button clicked for product in", productCard);

      const badgeElement = productCard.querySelector('.btn-badge');
      const currentCount = parseInt(badgeElement.textContent, 10) || 0; // Get current value or default to 0
      const newCount = currentCount + 1; // Update count

      // Update badge text and potentially 
      badgeElement.textContent = newCount;
      
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

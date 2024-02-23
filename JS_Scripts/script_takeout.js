// Initialize cart as an object with item names as keys and quantities as values
let cart = {};

// Event listener for cart icon to toggle cart visibility
document.getElementById('cart-icon').addEventListener('click', function() {
  const cartElement = document.getElementById('cart');
  cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
});

// Function to update the quantity of items in the cart
function updateQuantity(name, price, change) {
  if (!cart[name]) {
    cart[name] = { quantity: 0, price: price };
  }
  cart[name].quantity += change;
  
  if (cart[name].quantity < 0) cart[name].quantity = 0; // Prevent negative quantities

  // Update the input field
  const itemQuantityInput = document.querySelector(`[data-name="${name}"] .item-quantity`);
  itemQuantityInput.value = cart[name].quantity;

  updateCart();
}

// Function to update the cart display and total
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = ''; // Clear current cart items
  let total = 0;

  Object.keys(cart).forEach(itemName => {
    let item = cart[itemName];
    if (item.quantity > 0) {
      total += item.quantity * item.price;
      const itemElement = document.createElement('div');
      itemElement.textContent = `${itemName} x ${item.quantity} - $${(item.quantity * item.price).toFixed(2)}`;
      cartItemsElement.appendChild(itemElement);
    }
  });

  document.getElementById('cart-total').textContent = "$"+total.toFixed(2);
  document.getElementById('cart-count').textContent = Object.values(cart).reduce((acc, cur) => acc + cur.quantity, 0);
}

// Event listeners for the plus and minus buttons
document.querySelectorAll('.quantity-controls').forEach(controls => {
  const minusButton = controls.querySelector('.minus');
  const plusButton = controls.querySelector('.plus');
  const itemName = controls.getAttribute('data-name');
  const itemPrice = parseFloat(controls.getAttribute('data-price'));

  minusButton.addEventListener('click', function() {
    updateQuantity(itemName, itemPrice, -1);
  });

  plusButton.addEventListener('click', function() {
    updateQuantity(itemName, itemPrice, 1);
  });
});

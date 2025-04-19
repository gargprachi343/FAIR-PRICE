const cartList = document.getElementById("cart-list");
const totalElem = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

// Populate cart with items and controls
function populateCart() {
  cartList.innerHTML = ""; // Clear the existing cart list
  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
    
    // Increase quantity button
    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.onclick = () => updateQuantity(index, 1);
    
    // Decrease quantity button
    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.onclick = () => updateQuantity(index, -1);
    
    // Remove item button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeItem(index);
    
    li.appendChild(increaseBtn);
    li.appendChild(decreaseBtn);
    li.appendChild(removeBtn);

    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElem.textContent = `Total: ₹${total}`;
}

// Update item quantity and total price
function updateQuantity(index, delta) {
  const item = cart[index];
  if (item.quantity + delta < 1) return; // Prevent quantity from being less than 1
  item.quantity += delta;

  // If the quantity is 1 and the user tries to decrease, confirm removal
  if (item.quantity === 1 && delta === -1) {
    const confirmRemove = confirm("Are you sure you want to remove this item?");
    if (confirmRemove) {
      removeItem(index);
    } else {
      return;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  populateCart(); // Re-render the cart
}

// Remove item from the cart
function removeItem(index) {
  cart.splice(index, 1); // Remove the item at the given index
  localStorage.setItem("cart", JSON.stringify(cart));
  populateCart(); // Re-render the cart
}

// Initialize the cart on page load
populateCart();

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty! Add items before proceeding to checkout.");
  } else {
    window.location.href = "checkout.html";
  }
});

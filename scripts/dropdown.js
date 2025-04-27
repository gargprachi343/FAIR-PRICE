document.getElementById("cart").addEventListener("click", () => {
    alert("Your cart is empty for now!");
  });

  document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.getElementById('heartBtn');
    heartBtn.addEventListener('click', () => {
      console.log("Heart button clicked!");
      if (heartBtn.textContent === '🤍') {
        heartBtn.textContent = '❤';
        heartBtn.classList.add('heart-red');
      } else {
        heartBtn.textContent = '🤍';
        heartBtn.classList.remove('heart-red');
      }
    });
  });
  

// add to cart button
document.addEventListener('DOMContentLoaded', () => { 
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.dataset.name;
      const productPrice = parseInt(productCard.dataset.price);

      addToCart(productName, productPrice);
    });
  });

  function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`); // Optional: Provide feedback to the user
  }
});

const cartList = document.getElementById("cart-list");
const totalElem = document.getElementById("total");
const form = document.getElementById("checkout-form");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

// Populate cart
cart.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
  cartList.appendChild(li);
  total += item.price * item.quantity;
});

totalElem.textContent = `Total: ₹${total}`;

// Auto-fill saved customer data
window.onload = function () {
  fetch('/get-customer-data')
    .then(response => response.json())
    .then(data => {
      if (data) {
        document.getElementById("name").value = data.name || "";
        document.getElementById("contact").value = data.contact || "";
        document.getElementById("address1").value = data.address?.street || "";
        document.getElementById("address2").value = data.address?.city || "";
        document.getElementById("address3").value = data.address?.state || "";
        document.getElementById("address4").value = data.address?.zip || "";
        document.getElementById("email").value = data.email || "";
      }
    })
    .catch(error => console.error('Error fetching customer data:', error));
};

// Voice input function
function startVoiceInput(fieldId) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();

  recognition.onresult = function (event) {
    document.getElementById(fieldId).value = event.results[0][0].transcript;
  };

  recognition.onerror = function (event) {
    alert("Voice input failed: " + event.error);
  };
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from reloading

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const address3 = document.getElementById("address3").value;
  const address4 = document.getElementById("address4").value;
  const email = document.getElementById("email").value;

  // Validate contact number
  if (!/^\d{10}$/.test(contact)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Validate zip code
  if (!/^\d{6}$/.test(address4)) {
    alert("Please enter a valid 6-digit zip code.");
    return;
  }

  const customerData = {
    name,
    contact,
    address: {
      street: address1,
      city: address2,
      state: address3,
      zip: address4
    },
    email
  };

  console.log('Customer data being sent:', customerData);

  // Save to localStorage
  localStorage.setItem("customerData", JSON.stringify(customerData));

  // Send the customer data to backend
  fetch('/save-customer-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData)
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Failed to save customer data');
    })
    .then(data => {
      console.log('Customer data saved successfully:', data);
      alert("Payment Successful! Thank you for your purchase."); // Show success popup
      // Optionally: localStorage.removeItem("cart"); // clear cart if needed
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
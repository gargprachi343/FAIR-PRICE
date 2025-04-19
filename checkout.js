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
window.onload = function() {
  fetch('/get-customer-data')
    .then(response => response.json())
    .then(data => {
      if (data) {
        document.getElementById("name").value = data.name || "";
        document.getElementById("contact").value = data.contact || "";
        document.getElementById("address1").value = data.address.street || "";
        document.getElementById("address2").value = data.address.city || "";
        document.getElementById("address3").value = data.address.state || "";
        document.getElementById("address4").value = data.address.zip || "";
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

  const customerData = {
    name: document.getElementById("name").value,
    contact: document.getElementById("contact").value,
    address: `${document.getElementById("address1").value}, ${document.getElementById("address2").value}, ${document.getElementById("address3").value} - ${document.getElementById("address4").value}`,
    email: document.getElementById("email").value,
  };

  console.log('Customer data being sent:', customerData); // Debug log to check data

  // Validate phone number (should be exactly 10 digits)
  const contactNumber = customerData.contact;
  if (!/^\d{10}$/.test(contactNumber)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Validate zip code (should be 5 digits)
  const zipCode = customerData.address.zip;
  if (!/^\d{6}$/.test(zipCode)) {
    alert("Please enter a valid 6-digit zip code.");
    return;
  }

  // Send the customer data to the backend
  fetch('/save-customer-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData)
  })
  .then(response => {
    console.log('Response received from server:', response); // Debug log to check server response
    if (response.ok) {
      return response.json(); // Assuming the server returns JSON
    }
    throw new Error('Failed to save customer data');
  })
  .then(data => {
    console.log('Data saved successfully:', data); // Debug log to ensure success
    window.location.href = "setup-payment.html";  // Redirect after saving to setup-payment page
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

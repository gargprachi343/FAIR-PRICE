document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the normal way

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      message.textContent = "Please enter both email and password.";
      message.classList.remove('hidden');
      return;
    }

    message.classList.add('hidden');
    alert(`Welcome, ${email}!`);

    // Redirect to the new page
    window.location.href = "handcrafts.html";
  });
});

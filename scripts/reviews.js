const form = document.getElementById("review-form");
const nameInput = document.getElementById("name");
const reviewInput = document.getElementById("review");
const starLabels = document.querySelectorAll(".star");
const reviewsList = document.getElementById("reviews-list");

let selectedRating = 0; // Track the selected rating (1–5)

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// Update star selection
starLabels.forEach((label, index) => {
  label.addEventListener("click", () => {
    selectedRating = index + 1; // Set rating (1 to 5)
    updateStarSelection();
  });
});

// Update the UI to show the selected stars
function updateStarSelection() {
  starLabels.forEach((label, index) => {
    if (index < selectedRating) {
      label.classList.add("selected");
    } else {
      label.classList.remove("selected");
    }
  });
}

// Display all reviews
function displayReviews() {
  reviewsList.innerHTML = "";
  reviews.forEach((r) => {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <h3>${r.name} (${r.rating}⭐)</h3>
      <p>${r.review}</p>
    `;
    reviewsList.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newReview = {
    name: nameInput.value.trim(),
    review: reviewInput.value.trim(),
    rating: selectedRating
  };
  if (newReview.name && newReview.review && newReview.rating) {
    reviews.unshift(newReview); // Add to top
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
    form.reset();
    selectedRating = 0; // Reset rating after submission
    updateStarSelection(); // Update UI after reset
  }
});

displayReviews(); // Load reviews on page load

const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
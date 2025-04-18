// JavaScript for sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// JavaScript for navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add your navigation functionality here
        console.log("Clicked on: " + this.textContent);
        
        // Example of handling specific navigation items
        if(this.textContent === "LOGIN/SIGNUP") {
            alert("Login/Signup functionality will be implemented here");
        } else if(this.textContent === "SELL YOUR PRODUCT") {
            alert("Product selling page will be implemented here");
        }
    });
});

// Function to enhance user experience with smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
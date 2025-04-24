const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Toggle mobile sidebar
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileSidebar = document.getElementById('mobileSidebar');

sidebarToggle.addEventListener('click', () => {
  mobileSidebar.classList.toggle('hidden');
});

// Heart button toggle
heartBtn.addEventListener('click', () => {
  if (heartBtn.textContent === '🤍') {
    heartBtn.textContent = '❤';
    heartBtn.classList.add('heart-red');
  } else {
    heartBtn.textContent = '🤍';
    heartBtn.classList.remove('heart-red');
  }
});

// Products dropdown toggle on click
const toggleBtn = document.getElementById('productsToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click from bubbling to document
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  if (!document.getElementById('productsDropdown').contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});
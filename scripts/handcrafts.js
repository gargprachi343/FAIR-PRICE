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
    heartBtn.addEventListener('click', () => {
    if (heartBtn.textContent === '🤍') {
        heartBtn.textContent = '❤️';
        heartBtn.classList.add('heart-red');
    } else {
        heartBtn.textContent = '🤍';
        heartBtn.classList.remove('heart-red');
    }
    });
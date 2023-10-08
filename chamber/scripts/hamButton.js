
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

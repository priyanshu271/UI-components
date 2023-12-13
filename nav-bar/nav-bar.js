let menuButton = document.querySelector('.hamburger');
let menuItemsMobile = document.querySelector('.menu-items-mobile');
let menuItemLinks = document.querySelectorAll('.menu-items-mobile a');

function toggleMenu() {
    menuItemsMobile.classList.toggle('active');
}

function closeMenu() {
    menuItemsMobile.classList.remove('active');
}

menuItemLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
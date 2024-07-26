// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-menu-visible');
    });

    // Smooth scrolling for the "Portfolio" button
    const portfolioButton = document.querySelector('a[href="#projects"]');
    if (portfolioButton) {
        portfolioButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-visible');
    });

    // Smooth scrolling for the "Portfolio" button
    const portfolioButton = document.querySelector('a[href="#projects"]');
    portfolioButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
});



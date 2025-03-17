document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling to document
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Prevent menu from closing when clicking inside it
    navMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
});
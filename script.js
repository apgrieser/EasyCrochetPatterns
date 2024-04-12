// Example JavaScript for a simple toggle function for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    // var navToggle = document.getElementById('nav-toggle');
    // var navMenu = document.getElementById('nav-menu');

    // if (navToggle && navMenu) {
    //     navToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('is-active');
    //     });
    // }
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            var targetId = this.getAttribute('href').substring(1); // Get target section ID
            var targetSection = document.getElementById(targetId); // Get target section element
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Use smooth scrolling behavior
                });
            }
        });
    });
});

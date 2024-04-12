// Example JavaScript for a simple toggle function for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    // var navToggle = document.getElementById('nav-toggle');
    // var navMenu = document.getElementById('nav-menu');

    // if (navToggle && navMenu) {
    //     navToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('is-active');
    //     });
    // }

    // Scroll to the top of the page when the page loads
    // console.log('Scrolling to top');
    // window.scrollTo({ top: 0, behavior: 'auto' });
    // console.log('Scrolled to top');

    var navLinks = document.querySelectorAll('nav ul li a');
    var backToTop = document.querySelector('.back-to-top');

    // Scroll to the position on the page that matches the nav menu
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

    // Scroll back to the top of the window    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Adjust the scroll position as needed
            backToTop.classList.add('show-back-to-top');
        } else {
            backToTop.classList.remove('show-back-to-top');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
});

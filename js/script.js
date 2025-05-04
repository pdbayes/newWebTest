document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Optional: Toggle ARIA attribute for accessibility
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing the element after it has been revealed once
                observer.unobserve(entry.target);
            }
            // Optional: If you want elements to fade out when scrolling up,
            // add an else block here to remove the 'active' class.
            // else {
            //     entry.target.classList.remove('active');
            // }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: "0px 0px -50px 0px" // Optional: Trigger animation slightly before element is fully in view
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Footer Current Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

}); // End DOMContentLoaded
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle animation to the service cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Simple function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add animation class when element is in viewport
    function handleScroll() {
        serviceCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize cards with starting styles
    serviceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check positions on load and scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    // Add a subtle hover effect to the GitHub link
    const githubLink = document.querySelector('.github-link');
    if (githubLink) {
        githubLink.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.5)';
        });
        
        githubLink.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }
});

//Animation JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around root
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});
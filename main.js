document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.getElementById('navBar');
    const className = 'scrolled-to-top';

    // Function to check scroll position and apply/remove class
    function checkScrollPosition() {
        console.log(window.scrollY)
        if (window.scrollY === 0) {
            // User is at the very top
            if (!header.classList.contains(className)) {
                header.classList.add(className);
            }
        } else {
            // User is not at the top
            if (header.classList.contains(className)) {
                header.classList.remove(className);
            }
        }
    }

    // Listen for the scroll event
    window.addEventListener('scroll', checkScrollPosition);

    // Run once on page load to set the initial state (in case user reloads at the top)
    checkScrollPosition();
});
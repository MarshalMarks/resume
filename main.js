document.addEventListener("DOMContentLoaded", (event) => {
    const header = document.getElementById("navBar");
    const className = "scrolled-to-top";

    // Check scroll position and add/remove class
    function checkScrollPosition() {
        console.log(window.scrollY)
        if(window.scrollY === 0) {
            // User is at the top of the page
            if(!header.classList.contains(className)) {
                header.classList.add(className);
            }
        } else {
            // User is not at the top of the page
            if (header.classList.contains(className)) {
                header.classList.remove(className);
            }
        }
    }

    window.addEventListener('scroll', checkScrollPosition);

    checkScrollPosition();
});
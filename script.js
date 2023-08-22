document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle("dark-mode");
    }

    // Add event listener to the toggle button
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", toggleDarkMode);
});

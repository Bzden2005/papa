// script.js

// 1. Get the button element by its ID
const darkModeToggle = document.getElementById('darkModeToggle');

// 2. Get the body element
const body = document.body;

// 3. Add an event listener for clicks on the button
darkModeToggle.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element.
    // This will add the class if it's not present, and remove it if it is.
    body.classList.toggle('dark-mode');
    
    // Optional: Change the button text based on the current theme
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Змінити на світлу тему'; // Change to Light Theme
    } else {
        darkModeToggle.textContent = 'Змінити на темну тему'; // Change to Dark Theme
    }
});
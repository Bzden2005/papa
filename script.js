const themeButton = document.getElementById('theme-toggle-btn');
const bodyElement = document.body;

themeButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-theme');
    
    if (bodyElement.classList.contains('dark-theme')) {
        themeButton.textContent = 'Змінити на світлу тему';
    } else {
        themeButton.textContent = 'Змінити на чорну тему';
    }
});
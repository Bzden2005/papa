// script.js

// 1. Знаходимо кнопку за її ID
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    // 2. Додаємо слухача подій на клік
    themeToggle.addEventListener('click', function() {
        
        // 3. Перемикаємо CSS-клас 'dark-theme' на елементі <body>
        // Це основна дія, яка змінює вигляд завдяки CSS
        document.body.classList.toggle('dark-theme');

        // Опціонально: змінюємо текст кнопки
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Світла тема';
        } else {
            themeToggle.textContent = 'Темна тема';
        }
    });
} else {
    // Це повідомлення з'явиться в консолі, якщо ви помилилися в ID кнопки в HTML
    console.error('Кнопку з ID "themeToggle" не знайдено!');
}
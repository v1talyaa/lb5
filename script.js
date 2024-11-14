// Дані для завдання 1 (вбудовані замість файлів)
const languages = ["JavaScript", "Python", "C++", "Java", "Ruby"];
const students = ["Боярчук", "Губенко", "Дунай", "Медвідь", "Сахань"];

// Обробник для посилання "Мови"
document.getElementById('languages').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `<ul>${languages.map(lang => `<li>${lang}</li>`).join('')}</ul>`;
});

// Обробник для посилання "Студенти"
document.getElementById('students').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `<ul>${students.map(student => `<li>${student}</li>`).join('')}</ul>`;
});

// Завдання 2: отримання даних про погоду через OpenWeatherMap API
const apiKey = 'f8e1604568ce6976d4b590c3ee58eaca';
const city = 'London';

document.getElementById('getWeather').addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            // Перевіряємо, чи запит був успішним
            if (!response.ok) {
                throw new Error('Помилка при отриманні даних');
            }
            return response.json();
        })
        .then(data => {
            // Витягуємо потрібні дані з відповіді
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.getElementById('weatherInfo').innerHTML = `
                <p>Температура: ${temp}°C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${speed} м/с</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Помилка: ${error.message}</p>`;
            console.error('Помилка:', error);
        });
});

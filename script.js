// Знаходимо кнопку та таблицю
const addRowButton = document.getElementById('add-row-btn');
const table = document.getElementById('initials-table');

// Додавання нового рядка до таблиці
addRowButton.addEventListener('click', () => {
    // Дані для нового учасника
    const group = prompt('Введіть групу (наприклад, КІ-402):', 'КІ-402');
    const initials = prompt('Введіть ініціали учасника (наприклад, Анна Коваленко):', 'Анна Коваленко');

    if (group && initials) {
        // Створення нового рядка
        const newRow = table.insertRow();

        // Додавання клітинок до рядка
        const groupCell = newRow.insertCell(0);
        const initialsCell = newRow.insertCell(1);

        // Заповнення клітинок
        groupCell.textContent = group;
        initialsCell.textContent = initials;
    } else {
        alert('Ви не заповнили всі поля.');
    }
});

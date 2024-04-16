document.addEventListener('DOMContentLoaded', function() {
    const fieldsets = document.querySelectorAll('.beverage');

    fieldsets.forEach((fieldset, index) => {
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'X';
        fieldset.appendChild(removeButton); // Добавляем кнопку в конец fieldset

        if (fieldsets.length > 1) {
            removeButton.addEventListener('click', function() {
                fieldset.remove();
            });
        } else {
            removeButton.disabled = true;
        }
    });

    const addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', function() {
        const newBeverage = fieldsets[0].cloneNode(true); // Клонируем первый fieldset
        document.querySelector('form').appendChild(newBeverage);
    });
});

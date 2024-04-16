
(function() {
    const form = document.querySelector('form');
    const beverageForm = document.querySelector('.beverage');
    const addBeverageButton = document.querySelector('.add-button');
    let beverageCount = 1;

    addBeverageButton
        .addEventListener('click', () => {
            beverageCount++;
            const clonedBeverageForm = beverageForm.cloneNode(true);
            clonedBeverageForm.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`
            form.insertBefore(clonedBeverageForm, addBeverageButton.parentNode);
        });
})();
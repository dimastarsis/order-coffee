(function () {
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

(function () {
    const modal = document.querySelector('.modal');
    const submitButton = document.querySelector('.submit-button');
    const modalClose = document.querySelector('.modal-close');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block'
    });

    modalClose.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
})();

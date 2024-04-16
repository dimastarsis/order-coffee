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

const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.submit-button');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    modalContent.textContent = `Вы заказали ${formatDrinkWord(beverageCount)}`;
    modal.style.display = 'block'
});

modalClose.addEventListener('click', () => modal.style.display = 'none');

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function formatDrinkWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return `${count} напиток`;
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        return `${count} напитка`;
    } else {
        return `${count} напитков`;
    }
}
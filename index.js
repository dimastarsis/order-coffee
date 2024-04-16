const form = document.querySelector('form');
const beverageForm = document.querySelector('.beverage');
const addBeverageButton = document.querySelector('.add-button');
let beverageCount = 1;

addBeverageButton
    .addEventListener('click', () => {
        beverageCount++;
        const clonedBeverageForm = beverageForm.cloneNode(true);
        clonedBeverageForm.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`

        clonedBeverageForm
            .querySelectorAll('input[type=radio]')
            .forEach((e) => {
                e.name = `milk${beverageCount}`;
                e.selected = false;
            });

        clonedBeverageForm
            .querySelectorAll('input[type=checkbox]')
            .forEach((e) => e.checked = false);

        let removeButton = clonedBeverageForm.querySelector('.remove-button')
        removeButton.addEventListener('click', function () {
            deleteBeverage(clonedBeverageForm)
        });

        form.insertBefore(clonedBeverageForm, addBeverageButton.parentNode);
    });

function deleteBeverage(beverage) {
    if (beverageCount === 1)
        return
    beverage.remove();
    beverageCount--;
    let beverages = document.getElementsByClassName('beverage')

    for (let i = 0; i < beverageCount; i++) {
        beverages[i].querySelector('.beverage-count').textContent = `Напиток №${i + 1}`;
        beverages[i]
            .querySelectorAll('input[type=radio]')
            .forEach((e) => e.name = `milk${i + 1}`);
    }
}

function applyText(textarea, parent) {
    parent.getElementsByClassName("user-text")[0].innerHTML = textarea.value
        .replace(/(срочно)|(быстрее)|(побыстрее)|(скорее)|(поскорее)|(очень нужно)/gi, "<b>$&</b>");
}

const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.submit-button');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const modalTable = modalContent.querySelector('table');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    modalContent.querySelector('p').textContent = `Вы заказали ${formatDrinkWord(beverageCount)}`;

    modalTable
        .querySelector('tbody')
        .querySelectorAll('tr')
        .forEach((e) => e.remove());

    for (const form of document.querySelectorAll('.beverage')) {
        const row = document.createElement('tr');

        const drinkColumn = document.createElement('td');
        const options = form.querySelectorAll('option');
        for (const option of options) {
            if (option.selected) {
                drinkColumn.textContent = option.textContent;
                break;
            }
        }
        row.appendChild(drinkColumn);

        const milkColumn = document.createElement('td');
        const radioInputs =  form.querySelectorAll('input[type=radio]');
        for (const input of radioInputs) {
            if (input.checked) {
                milkColumn.textContent = input.nextElementSibling.textContent;
                break;
            }
        }
        row.appendChild(milkColumn);

        const additionalColumn = document.createElement('td');
        const checkboxInputs =  form.querySelectorAll('input[type=checkbox]');
        const additional = [];
        for (const input of checkboxInputs) {
            if (input.checked) {
                additional.push(input.nextElementSibling.textContent);
            }
        }
        additionalColumn.textContent = additional.join(', ');
        row.appendChild(additionalColumn);

        const messageColumn = document.createElement('td');
        const userText = form.querySelector('.user-text');
        messageColumn.textContent = userText.textContent;
        row.appendChild(messageColumn);

        modalTable
            .querySelector('tbody')
            .appendChild(row);
    }

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
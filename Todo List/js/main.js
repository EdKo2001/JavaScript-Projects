let add = document.querySelector('.header__input button');
let inputValue = document.querySelector('.header__input input');
let container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item__input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');


        let edit = document.createElement('button');
        edit.innerHTML = "Edit";
        edit.classList.add('item__edit');

        let remove = document.createElement('button');
        remove.innerHTML = "Remove";
        remove.classList.add('item__remove');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

        edit.addEventListener('click', () => {
            input.disabled = false;
        })

        remove.addEventListener('click', () => {
            input.classList.add('item__input-activate');
            edit.classList.add('item__edit-activate');
            remove.classList.add('item__remove-activate');
            edit.disabled = true;
            input.disabled = true;
        })
    }
}

function check() {
    if(inputValue.value != '') {
        new item(inputValue.value);
        inputValue.value = "";
    }
}
add.addEventListener('click', check);

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const output = document.querySelector('[data-output]');



numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        output.innerText += button.innerText;
    })
})
  
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(output.innerText == '') {
            return;
        } else if (output.innerText.includes(button.innerText)){
            return false;
        } else {
            output.innerText += button.innerText;
        }
    })
})
  
equalsButton.addEventListener('click', () => {
    if(output.innerText == '') {
        return;
    } else {
        output.innerText = eval(output.innerText); 
    }
      
})
allClearButton.addEventListener('click', () => {
    output.innerText = '';
})

deleteButton.addEventListener('click', () => {
    output.innerText = output.innerText.slice(0, -1);
})

    

    

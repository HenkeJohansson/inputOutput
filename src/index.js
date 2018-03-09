const outputArea = document.querySelector('.textarea-output');
const buttonExecute = document.querySelector('.button-execute');

buttonExecute.addEventListener('click', (e) => execute(e));


function execute(e) {
    const input = document.querySelector('.textarea-input').value;
    const output = input;

    
    outputArea.value = output;
}
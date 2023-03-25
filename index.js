const numberButtons = document.querySelectorAll('.number-button')
const allClearButton = document.getElementById('all-clear-button')
const deleteButton = document.getElementById('delete-button')
const equalButton = document.getElementById('equal-button')
const comaButton = document.getElementById('coma-button')
const divideButton = document.getElementById('divide-button')
const multiplyButton = document.getElementById('multiply-button')
const subtractionButton = document.getElementById('subtraction-button')
const addingButton = document.getElementById('adding-button')
const previousValue = document.querySelector('.previous-value')
const currentValue = document.querySelector('.current-value')

let previousDisplayedValue = ''
let currentDisplayedValue = ''

function appendNumber(number){
  currentDisplayedValue = currentDisplayedValue + number.toString(); 
  updateValue(currentValue, currentDisplayedValue) 
}

function allClear(){
   previousDisplayedValue = ''
   currentDisplayedValue = ''
   updateValue(previousValue, previousDisplayedValue)
   updateValue(currentValue, currentDisplayedValue)
}

function deleteNumber(){
  currentDisplayedValue = currentDisplayedValue.slice(0 , -1);
  updateValue(currentValue, currentDisplayedValue) 
}

function addComa(){
   if(currentDisplayedValue.includes('.')) return 
   currentDisplayedValue = currentDisplayedValue + '.'
   updateValue(currentValue, currentDisplayedValue)
}

function appendOperation(operation){
  if(currentDisplayedValue === '') return 
  previousDisplayedValue = previousDisplayedValue + currentDisplayedValue + ' ' + operation + ' '
  switch (operation) {
    case '+':
      previousDisplayedValue = parseInt(previousDisplayedValue) + parseInt(currentDisplayedValue)
      break;
  }
  currentDisplayedValue = ''
  updateValue(currentValue, currentDisplayedValue) 
  updateValue(previousValue, previousDisplayedValue)
}

function equals(){

}

function updateValue(value, display){
   value.textContent = display
}

deleteButton.addEventListener('click', deleteNumber)
allClearButton.addEventListener('click', allClear)
comaButton.addEventListener('click', addComa)
equalButton.addEventListener('click', equals)
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.value); 
  })
})
divideButton.addEventListener('click', () => {
  appendOperation(divideButton.value)
})
multiplyButton.addEventListener('click', () => {
  appendOperation(multiplyButton.value)
})
addingButton.addEventListener('click', () => {
  appendOperation(addingButton.value)
})
subtractionButton.addEventListener('click', () => {
  appendOperation(subtractionButton.value)
})














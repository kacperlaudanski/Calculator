const numberButtons = document.querySelectorAll('.number-button')
const operationButtons = document.querySelectorAll('.operation-button')
const allClearButton = document.getElementById('all-clear-button')
const deleteButton = document.getElementById('delete-button')
const equalButton = document.getElementById('equal-button')
const comaButton = document.getElementById('coma-button')
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

function chooseOperation(operation){
  if(currentDisplayedValue === '') return
  if(currentDisplayedValue !== ''){
     compute()
  }
  previousDisplayedValue = previousDisplayedValue + currentDisplayedValue + ' ' + operation + ' '
  currentDisplayedValue = ''
  updateValue(previousValue, previousDisplayedValue)
  updateValue(currentValue, currentDisplayedValue)
}

function compute(operation){
  let computation; 
  const prev = parseInt(previousDisplayedValue)
  const current = parseInt(currentDisplayedValue)
  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break 
    case '*':
      computation = prev * current
      break 
    case '÷':
      computation = prev / current
      break 
    default: return 

  }
  previousDisplayedValue = computation; 
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
operationButtons.forEach((button) => {
   button.addEventListener('click', () => {
    chooseOperation(button.value)
   })
})














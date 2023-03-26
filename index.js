const numberButtons = document.querySelectorAll('.number-button')
const operationButtons = document.querySelectorAll('.operation-button')
const allClearButton = document.getElementById('all-clear-button')
const deleteButton = document.getElementById('delete-button')
const equalButton = document.getElementById('equal-button')
const previousValueScreen = document.querySelector('.previous-value')
const currentValueScreen = document.querySelector('.current-value')

let previousDisplayedValue = ''
let currentDisplayedValue = ''
let mathSign; 
let result; 

function displayNumber(){
  if(this.value === '.' && currentValueScreen.textContent.includes('.')) return
  if(this.value === '.' && currentValueScreen.textContent === ''){
    currentValue.textContent = '0'
  }
  currentDisplayedValue += this.value 
  updateValue(currentValueScreen, currentDisplayedValue)
}

function allClear(){
   previousDisplayedValue = ''
   currentDisplayedValue = ''
   updateValue(previousValueScreen, previousDisplayedValue)
   updateValue(currentValueScreen, currentDisplayedValue)
}

function deleteNumber(){
  currentDisplayedValue = currentDisplayedValue.slice(0 , -1);
  updateValue(currentValueScreen, currentDisplayedValue) 
}

function chooseOperation(){ 
  if (mathSign !== ''){
    showResult(); 
  }
  mathSign = this.value
  if (currentDisplayedValue === '') return
  previousDisplayedValue += currentDisplayedValue + ' ' + mathSign + ' '
  currentDisplayedValue = ''
  updateValue(previousValueScreen, previousDisplayedValue)
  updateValue(currentValueScreen, currentDisplayedValue)
}

function compute(){
  let prev = parseFloat(previousDisplayedValue)
  let current = parseFloat(currentDisplayedValue)
  operation = mathSign; 
  switch (operation) {
    case '+':
      result = prev + current
      break;
    case '-':
      result = prev - current 
      break; 
    case '*':
      result = prev * current
      break; 
    case '÷':
      result = prev / current 
      break; 
    default: 
     return 
  }
  if (!Number.isInteger(result)){
    currentDisplayedValue = result.toFixed(2)
  }else {
    currentDisplayedValue = result
  }
  previousDisplayedValue = ''
  updateValue(currentValueScreen, currentDisplayedValue) 
  updateValue(previousValueScreen, previousDisplayedValue)
}

function showResult(){
   if(previousDisplayedValue === '' || currentDisplayedValue === '') return
   compute()
}

function updateValue(value, display){
   value.textContent = display
}

deleteButton.addEventListener('click', deleteNumber)
allClearButton.addEventListener('click', allClear)
equalButton.addEventListener('click', showResult)
numberButtons.forEach((button) => {
  button.addEventListener('click', displayNumber)
})
operationButtons.forEach((button) => {
   button.addEventListener('click', chooseOperation)
})

document.addEventListener('keydown', () => {
  if(event.key >= '0' && event.key <= '9' || event.key === '.'){
    displayNumber.call({value: event.key})
  }
  if (event.key === 'Backspace'){
    deleteNumber()
  }
  if(event.key === 'Enter'){
    showResult()
  }
})













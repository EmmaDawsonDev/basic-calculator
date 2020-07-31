//https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/


//TO DO:


// get % button working - for + and -
// make it work when multiple operations are used

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display');



keys.addEventListener("click", e => {
 if (e.target.matches(".btn")) {
	const key = e.target;
	const action = key.dataset.action;
	const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;
  //Showing the numbers on the screen
if (!action) {
	 if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === "calculate") {
    display.textContent = keyContent;
  calculator.dataset.previousKeyType = 'number'; //resets previousKeyType from operator to number
  
  } else {
    display.textContent = displayedNum + keyContent;
  }
  }
  // When you press on an operator
   if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
  key.classList.add('is-depressed'); // adds class to change button color
  calculator.dataset.previousKeyType = 'operator'; // changes previousKeyType to operator
  setTimeout(function(){
    key.classList.remove('is-depressed');
 }, 1000); // removes color change class after 1s.
}
   if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
      
    } else if (previousKeyType === 'operator' || previousKeyType === "calculate") {
      display.textContent = '0.';
    }
    calculator.dataset.previousKeyType = 'decimal';
    }


if (action === 'clear') {
  display.textContent = "0";
  calculator.dataset.previousKeyType = 'clear';
}

if (action === "percent") {
   display.textContent = displayedNum / 100;
  calculator.dataset.previousKeyType = 'percent';
}

if (action === "negative") {
  display.textContent = "-" + displayedNum;
  calculator.dataset.previousKeyType = 'negative';
}

if (action === 'calculate') {
  
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;
  calculator.dataset.previousKeyType = 'calculate'; // resets so that previous number is removed from screen.
  const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
    
    return result;
  }
  
  const answer = calculate(firstValue, operator, secondValue)
  display.textContent = answer;
 
} 


 
 }
});


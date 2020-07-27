//https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/


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
	 if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent;
  calculator.dataset.previousKeyType = 'num'; //resets previousKeyType from operator to num
  
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
   display.textContent = displayedNum + '.';
}

if (action === 'clear') {
  display.textContent = "0";
}

if (action === 'calculate') {
  console.log('equal key!');
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;

  const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }
  
  display.textContent = calculate(firstValue, operator, secondValue);
 
} 


 
 }
});
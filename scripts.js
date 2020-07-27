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
  console.log('clear key!');
}

if (action === 'calculate') {
  console.log('equal key!');
  
 
} 


 
 }
});
// Ask the user for first the number.
// Ask the user for the second number.
// Ask the user for and operation to perform.
// Perform the operation on two number.
// print the result to the terminal.

// calculator


const readline = require('readline-sync');

console.log('Welcome to calculator');

console.log('what is first number?');
let number1 = readline.question();

console.log('what is second number?');
let number2 = readline.question();

console.log('what operation would like to perform/n1) Add 2) subtraction 3) Multiply 4) Divide');
let operation = readline.question();

let output ;
if (operation === '1') {
  output = Number( number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}
  
console.log(`The result is: ${output}`);
// Ask the user for the first number.
// Ask the user for the second number.
// ask the user for an operation they wnat to perform.
// perform operation on two number.
// print the result to the terminal;


const readline = require('readline-sync');

console.log('welcome to calculator');

console.log('what is your first number?');
let number1 = readline.question();

console.log('what is your second number');
let number2 = readline.question();

console.log('what operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) divide');
let operation = readline.question();

let ouput;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output =  Number(number1) + Number(number2);
} else if (operation === '3') {
  output =  Number(number1) * Number(number2);
} else if (operation === '4') {
  output =   Number(number1) / Number(number2);
}

console.log(`The result would be ${output}`);
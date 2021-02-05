// Ask the user for the first number.
// Ask the user for the second number.
// ask the user for an operation they wnat to perform.
// perform operation on two number.
// print the result to the terminal;

const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('welcome to calculator');

prompt('what is your first number.');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('That does not look like a valid number.');
  number1 = readline.question();
}

prompt('what is your second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('That does not look like a valid number.');
  number2 = readline.question();
}

prompt('what operator do you want to operate?\n1) Add 2) subract 3)multiply 4) divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, 4');
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number2) / Number(number2);
    break;
}
prompt(`the result is ${output}`);



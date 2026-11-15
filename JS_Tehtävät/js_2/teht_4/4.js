'use strict';

const numbers = [];
let number = parseFloat(prompt('Enter a number (0 stops).'));
while (number !== 0) {
    numbers.push(number);
    number = parseFloat(prompt('Enter a number (0 stops).'));
}


numbers.sort((a, b) => b - a);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
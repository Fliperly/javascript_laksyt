'use strict';

const rolls = parseInt(prompt('How many times do you want to roll the dice?'));
let sum = 0;

for (let i = 1; i <= rolls; i++) {

    const result = Math.floor(Math.random() * 6) + 1;
    sum += result;
}

console.log('The sum is ' + sum);
document.querySelector('#target').innerHTML = `You rolled the dice ${rolls} times. The sum is ${sum}.`;
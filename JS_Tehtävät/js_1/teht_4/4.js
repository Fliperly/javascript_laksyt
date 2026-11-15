'use strict';

const name = prompt('Enter your name.');
const number = Math.floor(Math.random() * 4) + 1;
let house;

switch (number) {
    case 1:
        house = 'Gryffindor';
        break;
    case 2:
        house = 'Slytherin';
        break;
    case 3:
        house = 'Hufflepuff';
        break;
    default:
        house = 'Ravenclaw';
}

document.querySelector('#target').innerHTML = `${name}, you are ${house}.`;
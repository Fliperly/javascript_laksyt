'use strict';

const dogs = [];
for (let i = 1; i <= 6; i++) {
    dogs.push(prompt('Enter the name of dog ' + i + '.'));
}

dogs.sort();
dogs.reverse();

const list = document.querySelector('#target');
for (let i = 0; i < dogs.length; i++) {
    list.innerHTML += `<li>${dogs[i]}</li>`;
}
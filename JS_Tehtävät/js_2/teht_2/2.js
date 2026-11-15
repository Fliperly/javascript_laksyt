'use strict';

const count = parseInt(prompt('How many participants are there?'));
const participants = [];
for (let i = 1; i <= count; i++) {
    participants.push(prompt('Enter the name of participant ' + i + '.'));
}

participants.sort();
const list = document.querySelector('#target');
for (let i = 0; i < participants.length; i++) {
    list.innerHTML += `<li>${participants[i]}</li>`;
}
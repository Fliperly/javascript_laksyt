"use strict";

function throwdice() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}

let result;

do {
    result = throwdice();
    document.getElementById("results").innerHTML += `<li>${result}</li>`;
}
while (result !== 6);
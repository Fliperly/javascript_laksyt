const a = parseInt(prompt("Enter the first integer:"));
const b = parseInt(prompt("Enter the second integer:"));
const c = parseInt(prompt("Enter the third integer:"));

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.querySelector("#target").innerHTML =
  `Sum: ${sum}<br>Product: ${product}<br>Average: ${average.toFixed(2)}`;
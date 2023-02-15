console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const resultAdd = operand1 + operand2;
  console.log(resultAdd);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const resultSubract = operand1 - operand2;
  console.log(resultSubract);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const resultMultiply = operand1 * operand2;
  console.log(resultMultiply);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const resultDivide = operand1 / operand2;
  console.log(resultDivide);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const resultExponent = operand1 ** operand2;
  console.log(resultExponent);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const resultModulo = operand1 % operand2;
  console.log(resultModulo);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
let operand11 = 12;

const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
increaseByOneButton.addEventListener("click", () => {
  operand11++;
  console.log(operand11);
});
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
increaseByFiveButton.addEventListener("click", () => {
  operand11 += 5;
  console.log(operand11);
});
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decreaseByOneButton.addEventListener("click", () => {
  operand11--;
  console.log(operand11);
});
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decreaseByFiveButton.addEventListener("click", () => {
  operand11 -= 5;
  console.log(operand11);
});
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  operand11 *= 2;
  console.log(operand11);
});
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});

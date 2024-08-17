const $ = document;
const btnList = $.querySelectorAll(".btn");

let buffer = "0";
let total = 0;
let previousOperator = null;

const screen = $.querySelector(".screen");

const populateScreen = () => {
  screen.innerHTML = buffer;
};

const applyOperation = (intBuffer) => {
  switch (previousOperator) {
    case "+":
      total += intBuffer;
      break;
    case "−":
      total -= intBuffer;
      break;
    case "×":
      total *= intBuffer;
      break;
    case "÷":
      total /= intBuffer;
  }
};

const calculate = (operator) => {
  if (buffer === "0") return;

  if (total === 0) total = +buffer;
  else applyOperation(+buffer);

  previousOperator = operator;
  buffer = "0";
};

const handleOperation = (operator) => {
  switch (operator) {
    case "C":
      buffer = "0";
      total = 0;
      break;
    case "=":
      if (previousOperator === null) return;
      applyOperation(+buffer);
      previousOperator = null;
      buffer = +total;
      total = 0;
      break;
    case "←":
      if (buffer.length === 1) buffer = "0";
      else buffer = buffer.substring(0, buffer.length - 1);
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      calculate(operator);
  }
};

const handleNumeric = (digit) => {
  // + : Concatenate
  buffer = buffer === "0" ? digit : buffer + digit;
};

const clickHandler = (target) => {
  const { innerHTML: char } = target;
  if (isNaN(+char)) handleOperation(char);
  else handleNumeric(char);
  populateScreen();
};

const bootstrap = () => {
  btnList.forEach((btn) => {
    btn.onclick = (event) => {
      clickHandler(event.target);
    };
  });
};

window.onload = () => {
  bootstrap();
};

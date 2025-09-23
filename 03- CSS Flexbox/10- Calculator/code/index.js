const $ = document;

const buttons = $.querySelectorAll(".button");

let buffer = "0";
let total = 0;
let previousOperator = null;

const screen = $.querySelector(".screen");

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
  if (buffer === "0") {
    return;
  }

  if (total === 0) {
    total = +buffer;
  } else {
    applyOperation(+buffer);
  }

  previousOperator = operator;

  buffer = "0";
};

const handleOperation = (operator) => {
  switch (operator) {
    case "C": {
      buffer = "0";

      total = 0;

      break;
    }

    case "=": {
      if (previousOperator === null) {
        return;
      }

      applyOperation(+buffer);

      previousOperator = null;

      buffer = +total;

      total = 0;

      break;
    }

    case "←": {
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }

      break;
    }

    case "+":
    case "−":
    case "×":
    case "÷": {
      calculate(operator);
    }
  }
};

const handleNumeric = (digit) => {
  // + : Concatenate
  buffer = buffer === "0" ? digit : buffer + digit;
};

const clickHandler = (target) => {
  const { innerHTML: char } = target;

  if (isNaN(+char)) {
    handleOperation(char);
  } else {
    handleNumeric(char);
  }

  screen.innerHTML = buffer;
};

const applyAnimation = (target) => {
  target.classList.add("animate");

  target.onanimationend = () => {
    target.classList.remove("animate");
  };
};

const bootstrap = () => {
  buttons.forEach((button) => {
    button.onclick = (event) => {
      const { target } = event;
      clickHandler(target);
      applyAnimation(target);
    };
  });
};

window.onload = () => {
  bootstrap();
};

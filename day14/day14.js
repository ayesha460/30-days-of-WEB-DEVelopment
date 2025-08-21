const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    if (button.classList.contains("operator")) {
      currentInput += " " + value + " ";
    }

    if (button.classList.contains("clear")) {
      currentInput = "0";
    }

    if (button.classList.contains("equal")) {
      try {
        let expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
        currentInput = eval(expression).toString();
      } catch {
        currentInput = "Error";
      }
    }

    display.textContent = currentInput;
  });
});
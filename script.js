var display = document.getElementById("display");
function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = "";
  }

  const operators = ["+", "-", "*", "/"];
  const lastChar = display.value.slice(-1);
  if (operators.includes(lastChar) && operators.includes(input)) {
    display.value = display.value.slice(0, -1) + input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
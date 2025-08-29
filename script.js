let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace(/\^/g, "**");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

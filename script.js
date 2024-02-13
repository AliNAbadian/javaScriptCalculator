const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  //   if ((display.value = NaN)) {
  //     alert("You Cant Do That!");
  //   } else {
  //     display.value = eval(display.value);
  //   }
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

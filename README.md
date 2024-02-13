# Calculator App

This is a simple calculator application implemented in JavaScript. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Usage

To use the calculator, follow these steps:

1. Open the `index.html` file in your web browser.
2. You will see a calculator interface with buttons for digits (0-9), arithmetic operators (+, -, *, /), and a clear button (C).
3. Click on the digits and operators to input your desired mathematical expression.
4. Press the "=" button to calculate the result.
5. Press the "C" button to clear the display.

## Code Explanation

The logic for the calculator is implemented in JavaScript, specifically in the `script.js` file. Here's a brief explanation of the key functions:

### `appendToDisplay(input)`

This function appends the provided input to the display. It is called whenever a digit or operator button is clicked.

### `clearDisplay()`

This function clears the display, resetting it to an empty string. It is called when the "C" button is clicked.

### `calculate()`

This function evaluates the mathematical expression displayed on the calculator and updates the display with the result. It uses JavaScript's `eval()` function to perform the calculation. However, it's wrapped in a `try-catch` block to handle potential errors, such as division by zero or invalid expressions. If an error occurs during evaluation, the display will show "Error".

## Note

Please note that the use of `eval()` for mathematical expression evaluation can pose security risks if the input is not properly validated. In a real-world application, it's recommended to use more robust methods for expression evaluation, such as parsing and evaluating the expression manually.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

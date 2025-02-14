// Get two numbers from the user
let firstNumber = parseInt(prompt("Enter the first number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

// Display values from firstNumber to secondNumber
let currentNumber = firstNumber;

while (currentNumber <= secondNumber) {
  console.log(currentNumber); // Display the current number

  // If the current number is a multiple of 7, break out of the loop
  if (currentNumber % 7 === 0) {
    break;
  }

  currentNumber++; // Increment to the next number
}

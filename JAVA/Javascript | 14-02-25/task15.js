// Get two numbers from the user
let firstNumber = parseInt(prompt("Enter the first number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

// Display values from firstNumber to secondNumber
let currentNumber = firstNumber;

while (currentNumber <= secondNumber) {
  // Skip multiples of 5
  if (currentNumber % 5 === 0) {
    currentNumber++; // Increment and continue the loop
    continue;
  }

  console.log(currentNumber); // Display the current number
  currentNumber++; // Increment to the next number
}

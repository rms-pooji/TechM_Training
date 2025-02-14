// Get two numbers from the user
let firstNumber = parseInt(prompt("Enter the first number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

// Calculate the third number as second number + 40
let thirdNumber = secondNumber + 40;

// Use a while loop to display the multiples of the first number from second number to third number
let currentNumber = secondNumber;

while (currentNumber <= thirdNumber) {
  if (currentNumber % firstNumber === 0) {
    console.log(currentNumber); // Display the multiple
  }
  currentNumber++;
}

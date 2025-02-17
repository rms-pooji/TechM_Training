function sumOfDigitsEvenOrOdd() {
    // Get the number input from the user
    let number = prompt("Enter a number:");

    // Check if the input is a valid number
    if (number !== null && !isNaN(number)) {
        let sum = 0;
        
        // Convert the number to a string to access each digit
        let numString = Math.abs(number).toString();
        
        // Loop through each digit and add it to the sum
        for (let i = 0; i < numString.length; i++) {
            sum += parseInt(numString[i]);
        }
        
        // Check if the sum is even or odd
        if (sum % 2 === 0) {
            console.log(`The sum of the digits of ${number} is even.`);
        } else {
            console.log(`The sum of the digits of ${number} is odd.`);
        }
    } else {
        console.log("Please enter a valid number.");
    }
}

// Call the function to execute
sumOfDigitsEvenOrOdd();

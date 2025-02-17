// Define the operation functions first
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => ({
    quotient: Math.floor(a / b),
    remainder: a % b
});

const calculate = () => {
    // Prompt the user to choose an operation
    let operation = prompt("Choose an operation: add, subtract, multiply, divide");

    // Prompt the user to input two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Switch statement to choose the operation and call the corresponding method
    switch (operation) {
        case 'add':
            console.log(`Sum: ${add(num1, num2)}`);
            break;
        case 'subtract':
            console.log(`Difference: ${subtract(num1, num2)}`);
            break;
        case 'multiply':
            console.log(`Product: ${multiply(num1, num2)}`);
            break;
        case 'divide':
            if (num2 !== 0) {
                console.log(`Quotient: ${divide(num1, num2).quotient}, Remainder: ${divide(num1, num2).remainder}`);
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation.");
    }
};

// Call the calculate function
calculate();

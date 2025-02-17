function displayFactors(number) {
    console.log(`Factors of ${number}:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

// Example usage
let number = 12; // You can change this number to test with different inputs
displayFactors(number);

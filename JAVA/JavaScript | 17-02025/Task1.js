function multiplicationTable(number, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage
let number = 5; // You can change this number
let limit = 10; // You can change the limit
multiplicationTable(number, limit);

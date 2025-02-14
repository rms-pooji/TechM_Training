let num = parseInt(prompt("Enter the number for multiplication table:"));
let limit = parseInt(prompt("Enter the limit till which the table should be displayed:"));
for (let i = 1; i <= limit; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

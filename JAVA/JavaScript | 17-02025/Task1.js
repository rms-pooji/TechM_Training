function multiplicationTable() {
    let num = parseInt(prompt("Enter the number: "));
    let limit = parseInt(prompt("Enter the limit: "));

    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable();

let year = parseInt(prompt("Enter the year:"));
let month = parseInt(prompt("Enter the month (1 for January, 2 for February, ..., 12 for December):"));

// Function to check leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Check conditions
if (isLeapYear(year)) {
    if (month === 2) {
        alert("The year is a leap year and the month is February with 29 days.");
    } else {
        alert("The year is a leap year and the month is not February.");
    }
} else {
    alert("The given year is not a leap year.");
}

// Prompt the user to enter the student's math score
let score = parseInt(prompt("Please enter the student's math score:"));

// Check the score and display the appropriate message
if (score === 100) {
  alert("Phenomenal!");
} else if (score > 85) {
  alert("Excellent!");
} else if (score >= 71 && score <= 85) {
  alert("Good work!");
} else if (score >= 51 && score <= 70) {
  alert("Practice well!");
} else {
  alert("Hard work is needed");
}

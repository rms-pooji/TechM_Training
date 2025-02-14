const readline = require('readline');

// Create an interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user if they will go to the film today
rl.question('Will you go to the film today? (yes/no): ', (answer) => {
  // Check the user's response and display the result
  if (answer.toLowerCase() === 'yes') {
    console.log('Great! Enjoy the film!');
  } else if (answer.toLowerCase() === 'no') {
    console.log('Maybe another time. Have a nice day!');
  } else {
    console.log('Invalid response. Please answer with "yes" or "no".');
  }

  // Close the readline interface
  rl.close();
});

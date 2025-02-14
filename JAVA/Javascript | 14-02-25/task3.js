const number = 29; // You can change this value to any number

function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
  }
  return true;
}

if (isPrime(number)) {
  console.log("The number", number, "is a prime number.");
} else {
  console.log("The number", number, "is not a prime number.");
}

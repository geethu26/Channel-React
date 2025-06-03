// Task 2 : Write a javascript program to accept a number and find if the number is prime number or not
let n = parseInt(prompt("Enter a number to check if it is prime:"));
let isPrime = true;
if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  document.writeln("Entered number is: " + n + "<br>");
  document.writeln("<h3>" + n + " is a prime number.</h3>");
} else {
  document.writeln("Entered number is: " + n + "<br>");
  document.writeln("<h3>" + n + " is not a prime number.</h3>");
}

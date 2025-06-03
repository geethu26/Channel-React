// Task 4: Write a javascript program to find if the number is amstrong number or not
n = parseInt(prompt("Enter a number to check if it is an Armstrong number:"));
var temp = n;
var arm = 0;
while (n > 0) {
  let rem = n % 10;
  arm += Math.pow(rem, 3);
  n = Math.floor(n / 10);
}
console.log("Armstrong number is:", arm);
if (temp === arm) {
  document.writeln("<h3>" + temp + " is an Armstrong number.</h3>");
} else {
  document.writeln("<h3>" + temp + " is not an Armstrong number.</h3>");
}

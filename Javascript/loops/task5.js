// Task 5: Write a javascript program to find if the number is palindrome number or not.
n = parseInt(prompt("Enter a number:"));
let num = n;
let rev = 0;
while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}
if (rev === num) {
  document.writeln("<h3>" + num + " is a palindrome number.</h3>");
} else {
  document.writeln("<h3>" + num + " is not a palindrome number.</h3>");
}

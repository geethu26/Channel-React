// Task 3 : Write a javascript program to accept a number and find the fibonacci series pattern
n = parseInt(prompt("Enter number to find fibonacci sequence:"));
var f = 0,
  f1 = 0,
  f2 = 1;
document.writeln("Entered number is: " + n + "<br>");
document.writeln("Fibonacci series:");
document.write(f1, " ", f2, " ");
for (let i = 1; i <= n; i++) {
  f = f1 + f2;
  document.write(f, " ");
  f1 = f2;
  f2 = f;
}

// Task 1 : Write a javascript program to find the factorial of a given number?
n = parseInt(prompt("Enter a number to find factorial:"));
fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
document.writeln("Entered number is: " + n + "<br>");
document.writeln("<h3>Factorial of entered number is: " + fact + "</h3>");
console.log("Factorial of entered number is:", fact);

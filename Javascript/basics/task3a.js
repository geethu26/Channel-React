// 3. Write a javascript program to swap 2 numbers with temporary variable
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");

document.write(
  "<p>Values before swapping:</p>",
  "num1:",
  num1,
  ", num2:",
  num2
);
// swapping with temporary variable
var temp;
var temp = num1;
num1 = num2;
num2 = temp;

document.write(
  "<p>Values after swapping with temp:</p>",
  "num1:",
  num1,
  ", num2:",
  num2
);

// 3. Write a javascript program to swap 2 numbers without using temporary variable
num1 = parseFloat(prompt("Enter first number:"));
num2 = parseFloat(prompt("Enter second number:"));
document.write(
  "<p>Values before swapping:</p>",
  "num1:",
  num1,
  ", num2:",
  num2
);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

document.write(
  "<p>Values after swapping without temp:</p>",
  "num1:",
  num1,
  ", num2:",
  num2
);

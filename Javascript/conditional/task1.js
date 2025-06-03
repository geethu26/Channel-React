// Task 1 : Write a javascript code to find the largest among the given three numbers
num1 = parseInt(prompt("Enter 1st number:"));
num2 = parseInt(prompt("Enter 2nd number:"));
num3 = parseInt(prompt("Enter 3rd number:"));

document.writeln(
  "<h2>Entered numbers are ",
  num1,
  ", ",
  num2,
  ", ",
  num3,
  "</h2>"
);

if (num1 > num2 && num1 > num3) {
  document.writeln("<h2>Largest number is ", num1, "<h2>");
} else if (num2 > num3) {
  document.writeln("<h2>Largest number is ", num2, "<h2>");
} else {
  document.writeln("<h2>Largest number is ", num3, "<h2>");
}

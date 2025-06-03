// Task 3: Write a javascript program to find the roots of a quadratic equation?
var a = parseInt(prompt("Enter coefficient a:"));
var b = parseInt(prompt("Enter coefficient b:"));
var c = parseInt(prompt("Enter coefficient c:"));

var d = b * b - 4 * a * c;
if (d > 0) {
  var root1 = (-b + Math.sqrt(d)) / (2 * a);
  var root2 = (-b - Math.sqrt(d)) / (2 * a);
  document.writeln("<p>Roots are real and different:</p>");
  document.writeln("<p>Root 1: " + root1 + "</p>");
  document.writeln("<p>Root 2: " + root2 + "</p>");
} else if (d === 0) {
  var root = -b / (2 * a);
  document.writeln("<p>Roots are real and same:</p>");
  document.writeln("<p>Root: " + root + "</p>");
} else {
  document.writeln("<p>Roots are complex and imaginary.</p>");
}

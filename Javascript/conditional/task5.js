// Task 5: Write a javascript code to perform  the following code:
// 		1) find the area of a circle if choice is 1
//      2) find the area of a rectangle if choice is 2
//      3) find the area of a cone if the choice is 3
// 		4) else print invalid choice
// use switch statement.

var choice = parseInt(
  prompt(
    "Enter your choice:\n1. Area of circle.\n2. Area of rectangle.\n3. Area of cone."
  )
);
switch (choice) {
  case 1:
    var r = parseFloat(prompt("Enter radius of circle:"));
    area = Math.PI * r * r;
    document.writeln("<h3>Area of circle is : ", area, "</h3>");
    break;
  case 2:
    var l = parseFloat(prompt("Enter length of rectangle:"));
    var b = parseFloat(prompt("Enter breadth of rectangle:"));
    area = l * b;
    document.writeln("<h3>Area of rectangle is : ", area, "</h3>");
    break;
  case 3:
    var r = parseFloat(prompt("Enter radius of cone:"));
    var h = parseFloat(prompt("Enter height of cone:"));
    area = Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));
    document.writeln("<h3>Area of cone is : ", area, "</h3>");
    break;
  default:
    document.writeln("<h3>Invalid choice entered. Please enter valid choice.");
    break;
}

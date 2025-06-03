// 2. Write a javascript program to find the area of a cylinder
var r = prompt("Enter radius of cylinder:");
var h = prompt("Enter height of cylinder:");
var area;
var area = 2 * Math.PI * (r * h + r * r);
document.write("<p>Area of Cylinder:</p>", area);

// 1. Write javascript program to find the area of a triangle using herons formula
var a = prompt("Enter length of side 1:");
var b = prompt("Enter length of side 2");
var c = prompt("Enter length of side 3");
var area;
var s = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 2;
area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
document.write("<p>Area of Triangle using herons formula:</p>", area);

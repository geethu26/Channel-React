// Task 2 : Write a javascript code to calculate the tax given for the following conditions.
//           if the income is less than 1,50,000 then no tax
// 	         if the income is between 1,51,000 and 2,50,000 then 10% of tax
// 	         if the income is between 2,51,000 and 3,50,000 then 20% of tax
//           if the income is above 5,00,000 then tax is 30%
// Deduct the tax and print the salary.

income = parseInt(prompt("Enter your income:"));
var tax = 0;
var salary = 0;
if (income < 150000) {
  document.writeln("<h2>No tax applicable</h2>");
  document.writeln("<h2>Salary after tax deduction is ", income, "</h2>");
} else if (income >= 150000 && income <= 250000) {
  tax = (income * 10) / 100;
  salary = income - tax;
  document.writeln("<h2>Tax applicable is ", tax, "</h2>");
  document.writeln("<h2>Salary after tax deduction is ", salary, "</h2>");
} else if (income >= 250000 && income <= 350000) {
  tax = (income * 20) / 100;
  salary = income - tax;
  document.writeln("<h2>Tax applicable is ", tax, "</h2>");
  document.writeln("<h2>Salary after tax deduction is ", salary, "</h2>");
} else if (income > 500000) {
  tax = (income * 30) / 100;
  salary = income - tax;
  document.writeln("<h2>Tax applicable is ", tax, "</h2>");
  document.writeln("<h2>Salary after tax deduction is ", salary, "</h2>");
}

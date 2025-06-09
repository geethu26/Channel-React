const fs = require("fs");
const studentData = fs.readFileSync("students.json");
const studentOjb = JSON.parse(studentData);
console.log(studentOjb.students);
const students = studentOjb.students;
console.log("========Student Details=======");
students.forEach((s) => {
  console.log(`Roll no: ${s.roll_no}`);
  console.log(`Name: ${s.name}`);
  console.log(`Math marks: ${s.math_mark}`);
  console.log(`Science marks: ${s.science_mark}`);
  console.log(`Grade: ${s.grade}`);
  console.log(`Passed: ${s.passed}`);
  console.log("=============================");
});

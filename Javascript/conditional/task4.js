// Task 4: Write a javascript code to accept the week day in number and print the week day in text.
// 	hint use: switch statement
var day = parseInt(prompt("Enter the day of week (1-7):"));
switch (day) {
  case 1:
    document.writeln("<h1>It's Monday</h1>");
    break;
  case 2:
    document.writeln("<h1>It's Tuesday</h1>");
    break;
  case 3:
    document.writeln("<h1>It's Wednesday</h1>");
    break;
  case 4:
    document.writeln("<h1>It's Thursday</h1>");
    break;
  case 5:
    document.writeln("<h1>It's Friday</h1>");
    break;
  case 6:
    document.writeln("<h1>It's Saturday</h1>");
    break;
  case 7:
    document.writeln("<h1>It's Sunday</h1>");
    break;
  default:
    document.writeln(
      "<h1>Invalid number entered. Cannot identify day of week.</h1>"
    );
    break;
}

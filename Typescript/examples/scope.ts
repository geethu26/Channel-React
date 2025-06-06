var x = 10;
function f() {
  var y = 5; //Global variable
  if (true) {
    var y = 10;
    console.log("Inside if x:", x);
    console.log("Inside if y:", y);
  }
  console.log("Inside f() x:", x);
  console.log("Inside f()y:", y);
}
f();
console.log("Outside f() x:", x);
// console.log("Outside f() y:", y);

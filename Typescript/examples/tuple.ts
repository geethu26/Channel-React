//tuples are array with multiple data type values
//in TS tuples are mutable unlike in python
//Eg. let arr = ["Typescript",1234,true,"Gee"]
let t1 = ["abc", 1234, true, "Gee"];
console.log(t1[0]);
t1[0] = "Hey";
console.log(t1[0]);
t1.push(89);
console.log(t1);
t1.pop();
console.log(t1);

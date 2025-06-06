//Installation
//npm i -g typescript
//tsc -v

//Compilation
//tsc file.ts : Compile TS to JS (a js file will be created)
//node file.js: Run JS file

let first: number = 10;
let second: number = 20;
let third = "Hello";

let sum: number = first + second;
let result: string = first + third; //will assume entire thing to be string

console.log("First Number: ", first);
console.log("Second Number: ", second);
console.log("Third Number: ", third);
console.log("Sum: ", sum);
console.log("Result: ", result);

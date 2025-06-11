const fs = require("fs");
const data = fs.readFileSync("book.json");
console.log(data); //will be in buffer format
console.log(data.toString()); //this will give in readable format

const dataBuffer = data.toString(); //json
const dataParse = JSON.parse(dataBuffer); //js object
console.log(dataParse.title);

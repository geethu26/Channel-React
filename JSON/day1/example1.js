//book is javascript object
const fs = require("fs"); //file system module

const book = {
  title: "Node JS",
  year: 1998,
  author: "James Bond",
};
console.log(book);
const bookJson = JSON.stringify(book); //encoding
console.log(bookJson);
console.log(bookJson.title);
const bookParse = JSON.parse(bookJson);
console.log(bookParse.title); //decoding
console.log(bookParse.author);

fs.writeFileSync("book.json", bookJson);

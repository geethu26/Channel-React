// const user = require("./user.json");
// console.log(user);
// console.log(user.skills);

const fs = require("fs");
const dataJSON = fs.readFileSync("user.json");
const data = JSON.parse(dataJSON);
console.log("Name:", data[[0]].name);
console.log("Skills:", data[[0]].skills);

data.forEach((user) => {
  console.log(`${user.name}'s skills are ${user.skills.join(", ")}`);
});

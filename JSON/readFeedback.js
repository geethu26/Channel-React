const fs = require("fs");

//Read feedback
const jsonData = fs.readFileSync("feedback.json");
const output = JSON.parse(jsonData); // decoding JS object

console.log("====User Feedbacks===");
output.feedbacks.forEach((fb) => {
  console.log(`Username:${fb.username}`);
  console.log(`Rating:${fb.rating}`);
  console.log(`Comment:${fb.comment}`);
  console.log(`Date:${fb.submitted_on}`);
  console.log(`Category:${fb.category}`);
  console.log("===============");
});

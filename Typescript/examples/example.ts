//Store user profile data
let name1: string = "Bhuvaneshwari";
let age: number = 34;
let isVerified: boolean = true;

if (isVerified) {
  console.log("Verified User");
}

//toggle status
let isOnline: boolean = false;
isOnline = true;

//Handle user response(string or number)
let userId: string | number = "A0112";
userId = 101;

//Use 'any' for dynamic content
let input: any = "start";
input = 10;
input = 10.5;

//Validate age limit
let userAge: number = 10;
if (userAge) {
  console.log("Eligible to vote");
}

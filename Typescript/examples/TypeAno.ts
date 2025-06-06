//Explicitly allow type of varaiable function

let username: string = "Geethu";
let age2: number = 22;
let isTrainer: boolean = true;

let scores = [90, 87, 78];
let stud: { name: string; rollNo: number } = {
  name: "Jassy",
  rollNo: 112,
};

function display(): string {
  return `Hello ${username} and age is ${age2}`;
}

console.log(display());

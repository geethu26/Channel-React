/*
What is an interface?
Used to define the structure of an object.
Its a way to describe the shape of data: what properties and methods
an object could have - without implementing them


Why use interface?
It will enforce the consitency in object structure and helps in code resudibilty, readability and type checking
Suports OOPs by defining class.
*/

interface Person1 {
  name: string;
  age: number;

  greet1(): void;
}

const user: Person1 = {
  name: "John",
  age: 30,
  greet1() {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
};

user.greet1();

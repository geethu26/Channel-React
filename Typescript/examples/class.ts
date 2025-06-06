class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    //initialisation
    (this.name = name), (this.age = age);
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name} `);
  }
}

const person1 = new Person("Geethu", 22); //instance of class
person1.greet();
console.log(person1.name);

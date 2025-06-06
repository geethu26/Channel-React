/*
what are access modifiers?
it controls the visibility of class members - props and methods

public - Anwhere(default)
private-only within class itself
protected-within the class and subclass
*/

class Student {
  public name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hi, i am ${this.name} and my age is ${this.age}`);
  }
}

const stu = new Student("Geethu", 22);
console.log(stu.name);
stu.greet();

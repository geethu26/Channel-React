//protected - Visibility of the class members inside the class and sub class

class Employee {
  //Main class
  protected id: number;
  private name: string;
  dept: string;
  constructor(id: number, name: string, dept: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }

  showId() {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Employee name:${this.name}`);
    console.log(`Employee dept:${this.dept}`);
  }
}

class Manager extends Employee {
  //Sub Class
  showManagerId() {
    console.log(`Manager Id:${this.id}`);
    console.log(`Manager dept:${this.dept}`);
  }
}

const mgr = new Manager(101, "Tanya", "IT");
mgr.showManagerId();
mgr.showId();
console.log(mgr.dept);
// mgr.id;

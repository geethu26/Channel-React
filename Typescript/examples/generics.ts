//Generics allow to write resuable and flexible code that works with any data

//function identity<T>(value:T):T{
// return value
// }

function displayData<T>(data: T): void {
  console.log("Value: ", data);
}

displayData<string>("Hello world");
displayData<number>(1233);
displayData<boolean>(true);

//Generic array function
function getFirstElement<T>(items: T[]): T {
  return items[0];
}
console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(["brie", "cheddar", "swizz"]));

//Generic Interface
interface Container<T> {
  value: T;
}

const numberBox: Container<number> = { value: 100 };
const stringBox: Container<string> = { value: "hurray" };

console.log(numberBox.value);
console.log(stringBox.value);

///Generic class
class DataHolder<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getValue(): T {
    return this.data;
  }
}

const numberholder = new DataHolder<number>(43);
const stringholder = new DataHolder<string>("Bleh");

console.log(numberholder.getValue());
console.log(stringholder.getValue());

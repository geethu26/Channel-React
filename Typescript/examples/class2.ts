class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getDetails(): string {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

const item = new Product("Plant pot", 250);
console.log(item.getDetails());

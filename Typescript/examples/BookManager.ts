// Use Case: Book Management

// We'll define the classes:
// Author: stores author details
// Publisher: stores publisher info
// Book :DataTransferItemList,price,author(as object) and publisher(object)

class Author {
  name: string;
  birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAuthorDetails(): string {
    return `${this.name} born in ${this.birthYear}`;
  }
}

class Publisher {
  name: string;
  //   birthYear: number;
  location: string;
  //   pubCompany: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
  getPublisherDetails(): string {
    return `${this.name}, lives in ${this.location}`;
  }
}

class Book {
  title: string;
  price: number;
  author: Author;
  publisher: Publisher;

  constructor(
    title: string,
    price: number,
    author: Author,
    publisher: Publisher
  ) {
    this.title = title;
    this.price = price;
    this.author = author;
    this.publisher = publisher;
  }

  displayBookDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Price: ${this.price}`);
    console.log(`Author: ${this.author.getAuthorDetails()}`);
    console.log(`Publisher: ${this.publisher.getPublisherDetails()}`);
  }
}

const author1 = new Author("Jane Austen", 1887);
const publisher1 = new Publisher("Emily Yard", "Sussex");
const book1 = new Book("Pride and Prejudice", 559, author1, publisher1);
book1.displayBookDetails();

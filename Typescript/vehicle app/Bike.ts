import { Vehicle } from "./vehicle";

export class Bike implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  start(): void {
    console.log(`${this.brand} bike zooms with speed ${this.speed}`);
  }

  stop(): void {
    console.log(`${this.brand} bike has stopped`);
  }
}

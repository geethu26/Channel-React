import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  start(): void {
    console.log(`${this.brand} car started at ${this.speed}km/h`);
  }

  stop(): void {
    console.log(`${this.brand} car stopped.`);
  }
}

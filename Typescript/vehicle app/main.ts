import { Car } from "./Car";
import { Bike } from "./Bike";

const myCar = new Car("Toyota", 120);
const myBike = new Bike("Yamaha", 80);

console.log("Car output:");
myCar.start();
myCar.stop();

console.log("Bike output:");
myBike.start();
myBike.stop();

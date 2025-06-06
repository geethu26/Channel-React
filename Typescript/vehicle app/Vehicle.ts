/*
property - brand,speed
methods- start and stop
classes- car and bike
*/

export interface Vehicle {
  brand: string;
  speed: number;
  start(): void;
  stop(): void;
}

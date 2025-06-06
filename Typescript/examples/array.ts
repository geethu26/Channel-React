let fruits: string[] = ["Apple", "Banana", "Mango"];
let animals: string[] = ["Zebra", "Lion", "Tiger", "Cheetah"];
let colors: string[] = ["Blue", "Green", "Brown", "Black", "Pink", "Yellow"];

console.log("Fruits:");
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

console.log("\n\nAnimals:");
animals.forEach((animal) => {
  console.log(animal.toLowerCase());
});

console.log("\nColours:");
colors.forEach((color) => {
  if (color.charAt(0) == "B") {
    console.log(color);
  }
});

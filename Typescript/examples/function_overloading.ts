function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(10, 20));
console.log(add("Hello", "TS"));

// Why overlaoding?
// handle various type sof input.
// Keep code DRY(dont  repeat yourself)
// Provide better Intellisense and type safety

//login greeting
function greetUser(name: string): string {
  return `Welcome ${name}`;
}

console.log(greetUser("Geethu"));

//Calculate Discount
function applyDiscount(price: number, discount: number = 0.1): number {
  return price - price * discount;
}
console.log(applyDiscount(3000));

//Format Message
function FormatMessage(msg?: string): string {
  return msg ? msg.toUpperCase() : "No message";
}

console.log(FormatMessage("TypeScript"));
console.log(FormatMessage());

//log error
function logError(error: string): void {
  console.error("Error:", error);
}

logError("Not Fetching Data");

//Sum order amounts
const sumOrders = function (a: number, b: number): number {
  return a + b;
};

console.log(sumOrders(10, 20));

//Multiply quantity and price
const calculateTotal = (qty: number, price: number): number => qty * price;
console.log(calculateTotal(4, 10));

//Format user name
const formatName = (name: string): string => `User:${name}`;
console.log(formatName("Geethu"));

//timer function
const getTimestamp = (): number => new Date().getTime();
console.log(getTimestamp());

const date = new Date(getTimestamp());
console.log("Date:", date.toDateString());

//Generate status
const getStatus = (score: number): string => {
  return score > 60 ? "Pass" : "Fail";
};

console.log(getStatus(71));

//Return config object
const getConfig = () => ({
  theme: "dark",
  layout: "grid",
});

console.log(getConfig());

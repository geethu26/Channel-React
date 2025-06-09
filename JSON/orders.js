const fs = require("fs");
const dataJSON = fs.readFileSync("orders.json");
const output = JSON.parse(dataJSON);
const orders = output.orders;
console.log(orders);

console.log("====Order Details====");

orders.forEach((order) => {
  console.log("Order Id:", order.order_id);
  console.log("Customer:", order.customer);
  console.log("Items:", order.items.join(", "));
  console.log("Price:", order.total_amount);
  console.log("Order Date:", order.order_date);
  console.log("Order Status:", order.status);
  console.log("=========================");
});

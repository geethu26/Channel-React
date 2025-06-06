// Enum deines a set of named contant. Typescript provides both string-based and numeric based enums.
// By default the index starts with 0.You can change the value manually. Typescript get support for enums from ES6

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

let OrderState: OrderStatus = OrderStatus.Shipped;
console.log(OrderState); //index
console.log(OrderStatus[OrderState]); //value

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

// console.log(Role.Admin);
// console.log(Role["User"]);

function getRoleAccess(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "You have full access";
      break;
    case Role.User:
      return "Limited Access";
      break;
    default:
      return "Guest access";
  }
}

console.log(getRoleAccess(Role.Admin)); //full Access
console.log(getRoleAccess(Role.User)); //full Access
console.log(getRoleAccess(Role.Guest)); //full Access

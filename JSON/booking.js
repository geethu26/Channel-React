const fs = require("fs");
const data = fs.readFileSync("booking.json");
const bookings = JSON.parse(data);
console.log("======Booking Details=====");
bookings.forEach((book) => {
  console.log("Booking ID:", book.booking_id);
  console.log("Guests:", book.guests.join(", "));
  console.log("Room:", book.room_type);
  console.log("Check in:", book.check_in);
  console.log("Check out:", book.check_out);
  console.log("Status:", book.status);
  console.log("Amenities:", book.amenities.join(", "));
  console.log("==================================");
});

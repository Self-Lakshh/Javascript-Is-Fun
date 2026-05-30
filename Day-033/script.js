// Day 033 - Specs & Project Release
// Day 33: Control Flow Practice - Ticket Price by Age
let age = 15;
let ticketPrice = 0;

if (age < 5) {
    ticketPrice = 0;
} else if (age >= 5 && age < 18) {
    ticketPrice = 10;
} else {
    ticketPrice = 20;
}
console.log("Determined ticket price:", ticketPrice);
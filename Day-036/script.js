// Day 36: Learning Objects - Keys, values, and methods
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022
};

console.log("Car Keys:", Object.keys(car));
console.log("Car Values:", Object.values(car));
console.log("Has model property?", car.hasOwnProperty("model"));
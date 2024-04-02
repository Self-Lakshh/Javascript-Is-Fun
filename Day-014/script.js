// Day 14: Math functions and random numbers practice
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.ceil(4.7):", Math.ceil(4.7));
console.log("Math.random():", Math.random());

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random between 1 and 10:", getRandomInt(1, 10));
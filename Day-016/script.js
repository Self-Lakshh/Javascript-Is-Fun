// Day 16: Logical operators & expression precedence
let x = 4, y = 10, z = 3;

console.log("x > 2 && y < 20:", x > 2 && y < 20);
console.log("Precedence example:", x > 5 || y < 15 && z === 3);
console.log("Explicit grouping:", (x > 5 || y < 15) && z === 3);
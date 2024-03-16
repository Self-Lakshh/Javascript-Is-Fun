// Day 9: Array iteration: for, for...of, forEach, map, filter, reduce (Reference: W3Schools Arrays)
const numbers = [10, 20, 30, 40, 50];

console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log("Index " + i + ": " + numbers[i]);
}

console.log("\nfor...of loop:");
for (const num of numbers) {
  console.log("Num:", num);
}

console.log("\nforEach execution:");
numbers.forEach((num, idx) => console.log("Index:", idx, "Val:", num));
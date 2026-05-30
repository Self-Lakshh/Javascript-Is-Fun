// Day 6: Learning Loops: for, while, do-while (Reference: W3Schools Loops)
console.log("For loop example:");
for (let i = 0; i < 4; i++) {
  console.log("Count: " + i);
}

console.log("\nWhile loop example:");
let count = 0;
while (count < 4) {
  console.log("Current count: " + count);
  count++;
}

console.log("\nDo-while loop example (runs at least once):");
let k = 0;
do {
  console.log("Do-while count: " + k);
  k++;
} while (k < 3);
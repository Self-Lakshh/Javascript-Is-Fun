// Day 020 - Specs & Project Release
// Day 20: Practicing loops control and branching (Reference: W3Schools Loops)
console.log("Break loop execution when index hits 5:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking loop!");
    break;
  }
  console.log("Count:", i);
}

console.log("\nContinue loop execution skipping evens:");
for (let j = 1; j <= 6; j++) {
  if (j % 2 === 0) continue;
  console.log("Odd:", j);
}
// Day 31: Deeper dive into Loops, Hoisting, and var leaks inside loops
console.log("Var loop scope leak demonstration:");
for (var i = 0; i < 3; i++) {
  // Executes
}
console.log("var index 'i' leaked outside block scope:", i);

console.log("Let loop prevents leaks:");
for (let j = 0; j < 3; j++) {
  // Block scoped
}
// Day 4: Logical (&&, ||, !) and Ternary Operators
const isLoggedIn = true;
const hasPermission = false;

console.log("Logical AND:", isLoggedIn && hasPermission);
console.log("Logical OR:", isLoggedIn || hasPermission);
console.log("Logical NOT:", !isLoggedIn);

const accessLevel = isLoggedIn ? "ADMIN" : "GUEST";
console.log("Access level:", accessLevel);
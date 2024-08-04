// Day 44: Fetch API & JSON Practice
console.log("Day 44: Fetch API & JSON Practice");

const sampleUserJson = JSON.stringify({ id: 100, name: "Mastering JS" });
const parsedUser = JSON.parse(sampleUserJson);
console.log("Simulating JSON conversions:", parsedUser.name);
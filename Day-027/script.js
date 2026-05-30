// Day 27: Advanced ES6 Functions: Rest, Spread, Destructuring (Reference: W3Schools ES6)

function collectArgs(...numbers) {
  console.log("Collected arguments (rest):", numbers);
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("Rest parameter sum:", collectArgs(1, 2, 3));

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread array merge:", arr2);

const config = { api: "https://api", port: 8080 };
const { api, port } = config;
console.log("Destructured values:", api, port);
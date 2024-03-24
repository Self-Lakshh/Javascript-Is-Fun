// Day 11: Objects and methods practice
const user = {
  id: 123,
  username: "jsdev",
  email: "developer@example.com",
  hobbies: ["coding", "gaming"],
  greet() {
    return "Hello from " + this.username;
  }
};

console.log("Username (Dot):", user.username);
console.log("Email (Bracket):", user["email"]);
console.log("Greeting method:", user.greet());

user.isAdmin = true;
console.log("Updated user:", user);
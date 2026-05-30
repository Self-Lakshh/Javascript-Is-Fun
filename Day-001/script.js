// Day 1: Learning let, const and block scope leaks (Reference: W3Schools Variables)
var legacyVar = "I leak out of block scopes!";
let modernLet = "I am restricted to blocks";
const constantValue = 3.14159;

if (true) {
  var varLeak = "I leak to the outside function scope!";
  let letSecure = "I only live inside this block!";
  console.log("Inside block (letSecure): " + letSecure);
}

console.log("Outside block (varLeak): " + varLeak);
// Day 23: Understanding Lexical Scopes and Scope Chain lookups
const globalVal = "Global Scope";

function outerScope() {
  const outerVal = "Outer Scope";
  
  function innerScope() {
    const innerVal = "Inner Scope";
    console.log("Inner:", innerVal);
    console.log("Outer:", outerVal);
    console.log("Global:", globalVal);
  }
  innerScope();
}
outerScope();
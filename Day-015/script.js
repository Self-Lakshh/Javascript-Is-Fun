// Day 015 - Specs & Project Release
// Day 15 Milestone: Simple Calculator specifications
function runCalc(n1, n2, op) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') return "Error: Invalid types";
  switch(op) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    case '/': return n2 !== 0 ? n1 / n2 : "Error: Div by zero";
    default: return "Error: Unknown operator";
  }
}
console.log("5 + 10 = " + runCalc(5, 10, '+'));
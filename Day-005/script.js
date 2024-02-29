// Day 5: Function declaration (Hoisted) vs expressions vs arrows
console.log("Declaration call: " + declareMsg());
function declareMsg() { return "I am hoisted!"; }

const expressMsg = function() { return "I am not hoisted!"; };
console.log("Expression call: " + expressMsg());

const arrowMsg = () => "I inherit surrounding this context";
console.log(arrowMsg());
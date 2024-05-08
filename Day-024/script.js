// Day 24: learning: Control flow with switch statement
function evaluateTrafficLight(color) {
  let action = "";
  switch(color.toLowerCase()) {
    case "red":
      action = "Stop!";
      break;
    case "yellow":
      action = "Slow down!";
      break;
    case "green":
      action = "Go!";
      break;
    default:
      action = "Caution: unknown light signal!";
  }
  return action;
}

console.log("Red light action:", evaluateTrafficLight("red"));
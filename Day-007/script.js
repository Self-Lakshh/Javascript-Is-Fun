// Day 7: Conditional Logic Exercises: If/Else, Ternary, Switch (Reference: W3Schools If...Else)
const hour = 10;
let greeting = "";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log("If-Else greeting:", greeting);

const dayOfWeek = 3;
let dayName = "";
switch (dayOfWeek) {
  case 1: dayName = "Monday"; break;
  case 3: dayName = "Wednesday"; break;
  default: dayName = "Other day";
}
console.log("Switch day:", dayName);
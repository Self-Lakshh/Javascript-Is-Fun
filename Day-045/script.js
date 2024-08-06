// Day 045 - Specs & Project Release
// Day 45 Milestone: Number Guessing Game specifications
const secretNum = 42;
function verifyGuess(guessVal) {
  if (guessVal === secretNum) return "🎉 Correct! The number was 42!";
  if (guessVal < secretNum) return "📈 Too low! Guess higher.";
  return "📉 Too high! Guess lower.";
}
console.log("Guess 30:", verifyGuess(30));
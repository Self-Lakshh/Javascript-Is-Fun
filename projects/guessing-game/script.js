let secret = Math.floor(Math.random() * 100) + 1;
function runGuess() {
  let val = parseInt(document.getElementById("guess-input").value);
  let res = document.getElementById("guess-res");
  if (isNaN(val)) return alert("Please guess a number!");
  if (val === secret) {
    res.textContent = "🎉 Correct! The number was " + secret;
    secret = Math.floor(Math.random() * 100) + 1;
  } else if (val < secret) {
    res.textContent = "📈 Too low! Try higher.";
  } else {
    res.textContent = "📉 Too high! Try lower.";
  }
}
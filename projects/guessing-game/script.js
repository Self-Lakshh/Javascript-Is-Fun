let secretNum;
let attempts;
let history;

function resetGame() {
  secretNum = Math.floor(Math.random() * 100) + 1;
  attempts = 8;
  history = [];
  
  document.getElementById("guess-input").disabled = false;
  document.getElementById("guess-input").value = '';
  document.getElementById("attempts-badge").textContent = `Remaining: ${attempts}`;
  document.getElementById("guess-res").textContent = "Waiting for your first guess...";
  document.getElementById("history-box").classList.add("hidden");
  document.getElementById("reset-btn").classList.add("hidden");
  document.getElementById("game-card").style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.35)";
  document.body.style.background = 'transparent';
}

function makeGuess() {
  const input = document.getElementById("guess-input");
  const val = parseInt(input.value);
  
  if (isNaN(val) || val < 1 || val > 100) return alert("Enter number between 1 and 100!");
  
  attempts--;
  history.push(val);
  input.value = '';
  
  const resMsg = document.getElementById("guess-res");
  const badge = document.getElementById("attempts-badge");
  const histBox = document.getElementById("history-box");
  const list = document.getElementById("guesses-list");
  
  badge.textContent = `Remaining: ${attempts}`;
  histBox.classList.remove("hidden");
  list.innerHTML = history.map(h => `<span class="guess-tag">${h}</span>`).join(' ');
  
  if (val === secretNum) {
    resMsg.innerHTML = "🎉 <strong>Correct! You got it!</strong>";
    input.disabled = true;
    document.getElementById("reset-btn").classList.remove("hidden");
    document.getElementById("game-card").style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.3)";
    document.body.style.background = "rgba(34, 197, 94, 0.05)";
  } else if (attempts <= 0) {
    resMsg.innerHTML = `💀 Game Over! The number was <strong>${secretNum}</strong>.`;
    input.disabled = true;
    document.getElementById("reset-btn").classList.remove("hidden");
  } else {
    const isCold = Math.abs(val - secretNum) > 15;
    resMsg.innerHTML = val > secretNum ? "📉 Too High! " : "📈 Too Low! ";
    resMsg.innerHTML += isCold ? "<span style='color:#ef4444'>(Cold)</span>" : "<span style='color:#38bdf8'>(Warm)</span>";
  }
}

document.addEventListener("DOMContentLoaded", resetGame);
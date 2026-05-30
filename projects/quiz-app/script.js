const questions = [
  { q: "What is 10 + 20 in JS?", opts: ["30", "1020", "NaN"], ans: 0 },
  { q: "Which scope protects let/const?", opts: ["Function", "Global", "Block"], ans: 2 }
];
let currentIdx = 0;
let score = 0;

function renderQuiz() {
  if (currentIdx >= questions.length) {
    document.getElementById("quiz-body").style.display = "none";
    const scoreDiv = document.getElementById("quiz-score");
    scoreDiv.style.display = "block";
    scoreDiv.textContent = "Quiz Finished! Score: " + score + "/" + questions.length;
    return;
  }
  let current = questions[currentIdx];
  document.getElementById("quiz-question").textContent = current.q;
  let optsContainer = document.getElementById("quiz-options");
  optsContainer.innerHTML = "";
  current.opts.forEach((o, i) => {
    let btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = o;
    btn.onclick = () => selectAns(i);
    optsContainer.appendChild(btn);
  });
}

function selectAns(idx) {
  if (idx === questions[currentIdx].ans) score++;
  currentIdx++;
  renderQuiz();
}

renderQuiz();
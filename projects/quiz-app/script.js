const quizData = [
  { q: "Which variable keyword respects block scope?", a: ["var", "let", "both", "neither"], c: 1 },
  { q: "What does deep copy prevent?", a: ["Heap pointer overrides", "Stack pointer mutations", "Garbage leaks", "Callback returns"], c: 0 },
  { q: "Which function type inherits lexical this?", a: ["Declarations", "Expressions", "Arrow functions", "Constructors"], c: 2 }
];

let idx = 0;
let score = 0;

function showQuestion() {
  const card = document.getElementById("quiz-card");
  const resCard = document.getElementById("result-card");
  
  if (idx >= quizData.length) {
    card.classList.add("hidden");
    resCard.classList.remove("hidden");
    document.getElementById("score-text").textContent = `${score} / ${quizData.length}`;
    document.getElementById("feedback-text").textContent = 
      score === quizData.length ? "👑 Perfection!" : score >= 2 ? "🎉 Great Job!" : "📚 Time to review!";
    return;
  }
  
  const current = quizData[idx];
  document.getElementById("quiz-question").textContent = current.q;
  document.getElementById("question-tracker").textContent = `Question ${idx + 1} of ${quizData.length}`;
  document.getElementById("quiz-progress").style.width = `${(idx / quizData.length) * 100}%`;
  
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = '';
  current.a.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => submitAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function submitAnswer(chosenIdx) {
  if (chosenIdx === quizData[idx].c) score++;
  idx++;
  showQuestion();
}

function restartQuiz() {
  idx = 0;
  score = 0;
  document.getElementById("quiz-card").classList.remove("hidden");
  document.getElementById("result-card").classList.add("hidden");
  showQuestion();
}

document.addEventListener("DOMContentLoaded", showQuestion);
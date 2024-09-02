let tasks = JSON.parse(localStorage.getItem('kanban') || '[]');

if (tasks.length === 0) {
  tasks = [
    { id: 1, text: "Revise scope logic", status: "todo" },
    { id: 2, text: "Build calculator layout", status: "progress" },
    { id: 3, text: "Setup environment", status: "done" }
  ];
}

function save() {
  localStorage.setItem('kanban', JSON.stringify(tasks));
  render();
}

function addTask() {
  const input = document.getElementById("kanban-input");
  const text = input.value.trim();
  if (!text) return;
  
  tasks.push({
    id: Date.now(),
    text,
    status: "todo"
  });
  input.value = '';
  save();
}

function delTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev, id) {
  ev.dataTransfer.setData("text", id);
}

function drop(ev, status) {
  ev.preventDefault();
  const id = parseInt(ev.dataTransfer.getData("text"));
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = status;
    save();
  }
}

function render() {
  document.getElementById("col-todo").innerHTML = '';
  document.getElementById("col-progress").innerHTML = '';
  document.getElementById("col-done").innerHTML = '';
  
  tasks.forEach(t => {
    const card = document.createElement("div");
    card.className = "k-card";
    card.draggable = true;
    card.ondragstart = (ev) => drag(ev, t.id);
    card.textContent = t.text;
    
    const del = document.createElement("span");
    del.className = "del-task";
    del.textContent = "❌";
    del.onclick = () => delTask(t.id);
    
    card.appendChild(del);
    
    const col = document.getElementById(`col-${t.status}`);
    if (col) col.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", render);
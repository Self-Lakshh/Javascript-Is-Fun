let todos = JSON.parse(localStorage.getItem('todos') || '[]');

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  input.value = '';
  save();
}

function toggleTodo(i) {
  todos[i].done = !todos[i].done;
  save();
}

function delTodo(i) {
  todos.splice(i, 1);
  save();
}

function render() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    li.className = `task-item ${todo.done ? 'done' : ''}`;
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = todo.text;
    span.onclick = () => toggleTodo(i);
    
    const btn = document.createElement('button');
    btn.className = 'del-btn';
    btn.innerHTML = '🗑️';
    btn.onclick = () => delTodo(i);
    
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
  
  document.getElementById('todo-count').textContent = `${todos.filter(t => !t.done).length} active`;
}

document.addEventListener("DOMContentLoaded", render);
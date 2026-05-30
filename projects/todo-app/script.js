let todos = JSON.parse(localStorage.getItem("todos")) || [];
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((t, i) => {
    let li = document.createElement("li");
    li.innerHTML = "<span>" + t + "</span><button class='del-btn' onclick='deleteTodo(" + i + ")'>x</button>";
    list.appendChild(li);
  });
}
function addTodo() {
  let val = document.getElementById("todo-input").value.trim();
  if(!val) return alert("Task cannot be empty!");
  todos.push(val);
  document.getElementById("todo-input").value = "";
  saveAndRender();
}
function deleteTodo(idx) {
  todos.splice(idx, 1);
  saveAndRender();
}
saveAndRender();
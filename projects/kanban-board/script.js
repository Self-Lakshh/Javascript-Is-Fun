function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev, columnId) {
  ev.preventDefault();
  let id = ev.dataTransfer.getData("text");
  let card = document.getElementById(id);
  let targetArea = document.getElementById(columnId);
  if (card && targetArea) {
    targetArea.appendChild(card);
  }
}
var detenerDrag = true;
function drop(eve) {
  eve.preventDefault();
  let datoId = eve.dataTransfer.getData("text");
  if (detenerDrag) {
    eve.target.appendChild(document.getElementById(datoId));
    detenerDrag = false;
  }
}
function drag(eve) {
  eve.dataTransfer.setData("text", eve.target.id);
}
function permiso(eve) {
  eve.preventDefault();
}

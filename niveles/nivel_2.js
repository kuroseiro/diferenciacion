var detenerDrag = true;
function drop(eve) {
  eve.preventDefault();
  let datoId = eve.dataTransfer.getData("text");
  if (detenerDrag) {
    eve.target.appendChild(document.getElementById(datoId));
    document.location.href="nivel_4.html";
    detenerDrag = false;
  }
}
function drag(eve) {
  eve.dataTransfer.setData("text", eve.target.id);
}
function permiso(eve) {
  eve.preventDefault();
}

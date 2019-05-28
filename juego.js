/*var destino_A,
    destino_B,
    origen;
function start() {
  origen = document.getElementById('despliegue');
  destino_A = document.getElementById('zonaDestino_A');
  destino_B = document.getElementById('zonaDestino_B');
  origen.addEventListener('dragstart', arrastrar);
  origen.addEventListener('dragend', final);
  //destino A
  destino_A.addEventListener('dragover', function(e) {
     e.preventDefault();
  }, false);
  destino_A.addEventListener('drop', soltar);
  //destino B
  destino_B.addEventListener('dragover', function(e) {
     e.preventDefault();
  }, false);
  destino_B.addEventListener('drop', soltar);
}
function arrastrar(ar) {
  let code = "<img src = '"+ origen.getAttribute(src) +"'/>";
  event.dataTransfer.setData("Text", code);
}
function soltar(ar) {

}
function final(ar) {

}*/
function drop(eve) {
  eve.preventDefault();
  let datoId = eve.dataTransfer.getData("text");
  eve.target.appendChild(document.getElementById(datoId));
}
function drag(eve) {
  eve.dataTransfer.setData("text", eve.target.id);
}
function permiso(eve) {
  eve.preventDefault();
}

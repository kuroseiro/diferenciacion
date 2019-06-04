var indiceImagenes = 0;
function drop(eve) {
  eve.preventDefault();
  let datoId = eve.dataTransfer.getData("text");
    if (indiceImagenes < 3) {
      indiceImagenes++;
    } else {
      indiceImagenes = 0;
    }
    start();
    switch (indiceImagenes) {
      case 0:
        document.getElementById('class_A').innerHTML = "Gatos";
        document.getElementById('class_B').innerHTML = "Perros";
        break;
        case 1:
          document.getElementById('class_A').innerHTML = "Espadas";
          document.getElementById('class_B').innerHTML = "Arcos";
          break;
          case 2:
            document.getElementById('class_A').innerHTML = "Tridentes";
            document.getElementById('class_B').innerHTML = "Lanzas";
            break;
      default:
          document.getElementById('class_A').innerHTML = "Motos";
          document.getElementById('class_B').innerHTML = "Carros";
    }
}
function drag(eve) {
  eve.dataTransfer.setData("text", eve.target.id);
}
function permiso(eve) {
  eve.preventDefault();
}
function start() {
  let despliegue = [],
          zona_A = [],
          zona_B = [];

  despliegue[0] = "image/des_0.png";
  despliegue[1] = "image/des_1.png";
  despliegue[2] = "image/des_2.png";
  despliegue[3] = "image/des_3.png";

  zona_A[0] = "image/A_0.png";
  zona_A[1] = "image/A_1.png";
  zona_A[2] = "image/A_2.png";
  zona_A[3] = "image/A_3.png";

  zona_B[0] = "image/B_0.png";
  zona_B[1] = "image/B_1.png";
  zona_B[2] = "image/B_2.png";
  zona_B[3] = "image/B_3.png";

  document.despliegue.src = despliegue[indiceImagenes];
  document.zona_A.src = zona_A[indiceImagenes];
  document.zona_B.src = zona_B[indiceImagenes];
}
window.addEventListener('load',start);

var indiceImagenes = 0,
    puntos = 0;
var color = '#B433C8';
var respuesta = [];
function drop(eve) {
  eve.preventDefault();
  let datoId = eve.dataTransfer.getData("text");
    if (eve.target.id == 'imagen_A' && respuesta || eve.target.id == 'zonaDestino_A' && respuesta) {
      puntos++;
    }else if (eve.target.id == 'imagen_B' && !respuesta || eve.target.id == 'zonaDestino_B' && !respuesta) {
      punros++;
    }
    if (indiceImagenes < 3) {
      indiceImagenes++;
    } else {
      alert("Tu puntaje final es de: "+ puntos);
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

  respuesta[0] = true;
  respuesta[1] = true;
  respuesta[2] = true;
  respuesta[3] = true;

  document.despliegue.src = despliegue[indiceImagenes];
  document.zona_A.src = zona_A[indiceImagenes];
  document.zona_B.src = zona_B[indiceImagenes];
}
function entrar(eve) {
  if (eve.target.id == 'zonaDestino_A' || eve.target.id == 'imagen_A') {
    document.getElementById('zonaDestino_A').style.background = 'rgb(5, 255, 0)';
    document.getElementById('imagen_A').style.background = 'rgb(5, 255, 0)';
  }else if (eve.target.id == 'zonaDestino_B' || eve.target.id == 'imagen_B') {
    document.getElementById('zonaDestino_B').style.background = 'rgb(5, 255, 0)';
    document.getElementById('imagen_B').style.background = 'rgb(5, 255, 0)';
  }else {
    document.getElementById('despliegue').style.background = 'rgb(217, 11, 11,)';
    document.getElementById('imagenRespuesta').style.background = 'rgb(217, 11, 11,)';
  }
}
function entrar_imagen(eve) {
  if (eve.target.id != 'despliegue') {
    eve.target.style.background = 'rgb(5, 255, 0)';

  } else {
    eve.target.style.background = 'rgb(217, 11, 11,)';
  }
}
function salir(eve) {
  eve.target.style.background = color;
}
function siguiente_nivel(eve) {
  document.getElementById('zonaDestino_A').style.background = color;
  document.getElementById('zonaDestino_B').style.background = color;
  document.getElementById('despliegue').style.background = color;
  document.getElementById('imagen_A').style.background = color;
  document.getElementById('imagen_B').style.background = color;
  document.getElementById('imagenRespuesta').style.background = color;
}
window.addEventListener('load',start);

const textArea = document.querySelector(".ingreso");
const mensaje = document.querySelector(".mensaje");
const teclaSound = document.getElementById("teclaSound");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Matriz de codificación
let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Crea la función para el botón de encriptar
function btnEncriptar() {
  const textoIngresado = textArea.value.trim(); // .trim elimina espacio vacios por delante y atras

  if (textoIngresado === "") {
    alert("Ingrese un texto antes de encriptar.");
    return;
  }

  const textoValidado = validarTexto(textoIngresado);

  if (textoValidado) {
    const textoEncriptado = encriptar(textoValidado);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    teclaSound.play();
  }
}
// Función que valida el texto ingresado
function validarTexto(texto) {
  const textoSinAcentos = quitarAcentos(texto);
  const textoSinCaracteresEspeciales = textoSinAcentos.replace(/[^a-z\s]/g, ""); //Elimina las acentuadas

  if (texto !== textoSinCaracteresEspeciales) {
    alert(
      "No se permiten mayúsculas, números, acentos ni carateres especiales."
    );
    return null;
  }

  return textoSinCaracteresEspeciales;
}

// Función que encripta
function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (const element of matrizCodigo) {
    if (stringEncriptada.includes(element[0])) {
      stringEncriptada = stringEncriptada.replaceAll(element[0], element[1]);
    }
  }
  return stringEncriptada;
}

// Función para quitar acentos
function quitarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función del botón desencriptar
function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  teclaSound.play();
}

//Función que desencripta
function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for (const element of matrizCodigo) {
    if (stringDesencriptada.includes(element[1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        element[1],
        element[0]
      );
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {
  let texto = document.getElementById("mensaje").value;               //asigna a texto el valor "Ej:hola" de la id "mensaje"
  navigator.clipboard.writeText(texto).then(function() {});           //Copia en el portapapeles el "hola"
  navigator.clipboard.readText().then((texto) => {                    //Lee el portapapeles
    document.querySelector(".textarea.ingreso").value = texto; });    //Lo asigna al destino
  teclaSound.play();                                                  //Da el sonido de tecla
}

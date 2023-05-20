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

//Crea la función para el botón de encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    teclaSound.play();
}

// Función que encripta
function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
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
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}

// Función del botón copiar
function btnCopiar() {
  let textarea = document.getElementById("mensaje");
  let texto = textarea.value;
  let textareaIngreso = document.querySelector(".textarea.ingreso");
  let textareaMensaje = document.getElementById("mensaje");
  
  // Copia el mensaje al Area de texto a codifica/decodificar
  textareaIngreso.value = textareaMensaje.value;
  
  // Crea un elemento de texto temporal
  let elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);

  // Selecciona el contenido del elemento de texto temporal
  elementoTemporal.select();
  
  // Copia al portapapeles
  navigator.clipboard.writeText(texto)
  .then(function() {});
    
  // Elimina el texto de la memoria
  document.body.removeChild(elementoTemporal);
  teclaSound.play();


}

function pegarDelPortapapeles() {
  navigator.clipboard.readText()
    .then((texto) => {
      let textarea = document.getElementById("textarea ingreso");
      textarea.value = texto;
    })
    
}

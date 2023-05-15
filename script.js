const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

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

  // Crea un elemento de texto temporal
  let elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);

  // Selecciona el contenido del elemento de texto temporal
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el contenido seleccionado al portapapeles
  navigator.clipboard.writeText(texto)
  .then(function() {
    // Éxito al copiar al portapapeles
    alert("Agregaste al portapapeles: " + texto);
  })
  .catch(function(error) {
    // Error al copiar al portapapeles
    console.error("Error al copiar al portapapeles:", error);
  });

  // Elimina el elemento de texto temporal
  document.body.removeChild(elementoTemporal);

}
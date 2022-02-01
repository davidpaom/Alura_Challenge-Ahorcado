//Llamado de las imagenes del ahorcado a variables.
var ahorcado0 = document.getElementById("ahorcado0")
var ahorcado1 = document.getElementById("ahorcado1")
var ahorcado2 = document.getElementById("ahorcado2")
var ahorcado3 = document.getElementById("ahorcado3")
var ahorcado4 = document.getElementById("ahorcado4")
var ahorcado5 = document.getElementById("ahorcado5")
var ahorcado6 = document.getElementById("ahorcado6")
//Declaración y llamado de las variables con los botones de jugar y agregar palabra
var botonJugar = document.getElementById("btn_jugar")
var botonAgregar = document.getElementById("btn_addword")
//Declaración y llamado de las variables para la palabra y para las lineas.
var palabra = document.getElementById("palabra")
var lineas = document.getElementById("lineas")
//Declaración de arreglo con las palabras
var palabras = ["ALURA", "ORACLE", "CHALLENGE"]
var randomWord = ""
var randomWordArray = []
var numeroDeLetras = 0;
var guiones = ""
//Esconder imagenes del ahorcado.
ahorcado6.style.visibility = "hidden";
ahorcado5.style.visibility = "hidden";
ahorcado4.style.visibility = "hidden";
ahorcado3.style.visibility = "hidden";
ahorcado2.style.visibility = "hidden";
ahorcado1.style.visibility = "hidden";
//

//Función para sacar una palabara aleatoramente y contar el numero de letras en la palabra, generando el string de guiones
function aleatorio () {
    let largo = palabras.length //Encontrar el tamaño del arreglo de palabras
    let random = Math.round(Math.random()*(largo-1)) //Sortear la posicion del arreglo de palabras
    randomWord = palabras[random] //Llamar la palabra previamente sorteada y ubicarla en nuestra variable
    randomWordArray = randomWord.split('') //Dividir la palabra aleatoria en un arreglo, letra por letra.
    numeroDeLetras = randomWordArray.length //Contar número de letras para generar nuestro String de guiones
    let guionesArray = [] //Declarar arreglo para escribir los guiones suficientes.
    //For para escribir guiones en el arreglo.
    for(let x=0; x<randomWordArray.length;x++){
        guionesArray.push("-")
    }
    guiones = guionesArray.join("") //Convertir el arreglo de guiones en String para imprimirlos debajo de la palabra.
}

aleatorio()
palabra.textContent = randomWord
lineas.textContent = guiones





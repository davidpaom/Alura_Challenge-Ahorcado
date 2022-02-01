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
var teclear = document.getElementById("entrada")
//Declaración y llamado de las variables para la palabra y para las lineas.
var palabra = document.getElementById("palabra")
var lineas = document.getElementById("lineas")
var oprimir = document.getElementById("oprimir")
//Declaración de arreglo con las palabras
var palabras = ["ALURA", "ORACLE", "CHALLENGE"]
//Declaracion del arreglo de letras totales del alfabeto.
var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ñ"]
var randomWord = ""
var randomWordArray = []
var numeroDeLetras = 0;
var guiones = ""
var tecla = 0;
//Esconder imagenes del ahorcado.
ahorcado6.style.visibility = "hidden";
ahorcado5.style.visibility = "hidden";
ahorcado4.style.visibility = "hidden";
ahorcado3.style.visibility = "hidden";
ahorcado2.style.visibility = "hidden";
ahorcado1.style.visibility = "hidden";
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

//funcion para tomar el valor de la tecla presionada, checar si es una letra del alfabeto y si no mostrar un mensaje. También imprime en el html
// la letra para que el usuario la vea.
function imprimir (e){
    //If general para saber si el codigo de la tecla tecleada corresponder a alguna letra del alfabeto o a la ñ en Mayuscula o Minuscula.
    if((e.which >= 65 && e.which<=90)||(e.which >= 97 && e.which<=122)||e.which==209||e.which==241){
        //If para identificar si es letra del alfabeto maysucula e imprimir el valor del arreglo Alfabeto antes creado. Corresponden a las letras.
        if(e.which >= 65 && e.which<=90){
            tecla = e.which-65
            oprimir.textContent = alfabeto[tecla]
        }
        //If If para identificar si es letra del alfabeto minuscula e imprimir el valor del arreglo Alfabeto antes creado. Corresponden a las letras.
        if(e.which >= 97 && e.which<=122){
            tecla = e.which-97
            oprimir.textContent = alfabeto[tecla]
        }
        //If para identificar si es la letra eñe en mayuscula o minuscula e imprimirla.
        if(e.which==209||e.which==241){
            tecla = 26
            oprimir.textContent = alfabeto[tecla]
        }
    } else {
        alert("RECUERDA QUE SOLO PUEDES TECLEAR LETRAS")
    }
}

function focus(){
    entrada.focus()
}

aleatorio() //Llamada a la función para sortear las palabras, se hace cada vez que empezamos el juego.
lineas.textContent = guiones //Impresión de los guiones debajo de las palabras.

entrada.focus() //Enfocarse en el input cada que empiece la página

entrada.addEventListener('keypress',imprimir) //Llamada a la función cada vez que se oprima una tecla. Se checará si la letra es tecla
//y si está dentro del alfabeto, de otra forma se mostrará una alerta.

setInterval(focus,1) //Llamada a la función para enfocarse en nuestro input que recibirá las letras.

palabra.textContent = randomWord






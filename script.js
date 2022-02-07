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
var ganarPerder = document.getElementById("ganarPerder")
var mostrarErrores = document.getElementById("mostrarErrores")
var newWord = document.getElementById("nuevaPalabra")
//Declaración de arreglo con las palabras
//var palabras = ["ALURA", "ORACLE", "CHALLENGE"]
//Declaracion del arreglo de letras totales del alfabeto.
var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ñ"]
var ahorcadoImages = [ahorcado0,ahorcado1,ahorcado2,ahorcado3,ahorcado4,ahorcado5,ahorcado6]
var arregloErrores = []
var randomWord = ""
var randomWordArray = []
var numeroDeLetras = 0;
var randomWordHidden = ""
var randomWordHiddenArray = []
var guiones = ""
var tecla = ""
var correctas = 0
var errores = 0
var adivina = false
var errorActivado = false
var letraAlready = false
var letraErrorAlready = false
var letter = ""
var correcto = false
//Esconder imagenes del ahorcado.
ahorcado6.style.visibility = "hidden";
ahorcado5.style.visibility = "hidden";
ahorcado4.style.visibility = "hidden";
ahorcado3.style.visibility = "hidden";
ahorcado2.style.visibility = "hidden";
ahorcado1.style.visibility = "hidden";

//Función para sacar una palabara aleatoramente y contar el numero de letras en la palabra, generando el string de guiones
function aleatorio () {
    let largo = arregloPalabras.length //Encontrar el tamaño del arreglo de palabras
    let random = Math.round(Math.random()*(largo-1)) //Sortear la posicion del arreglo de palabras
    randomWord = arregloPalabras[random] //Llamar la palabra previamente sorteada y ubicarla en nuestra variable
    randomWordArray = randomWord.split('') //Dividir la palabra aleatoria en un arreglo, letra por letra.
    numeroDeLetras = randomWordArray.length //Contar número de letras para generar nuestro String de guiones
    let guionesArray = [] //Declarar arreglo para escribir los guiones suficientes.
    //For para escribir guiones en el arreglo.
    for(let x=0; x<randomWordArray.length;x++){
        guionesArray.push("-")
        randomWordHiddenArray.push("~")
    }
    guiones = guionesArray.join(" ") //Convertir el arreglo de guiones en String para imprimirlos debajo de la palabra.
    randomWordHidden = randomWordHiddenArray.join("")
}
//Funcion cuando erras una letra.
function errar (letra){
    letter = letra
    //For para validar si la letra ya está en nuestras letras erradas y no repetirlas.
    for(let x = 0; x<arregloErrores.length; x++){
        if(letter==arregloErrores[x]){
            letraErrorAlready = true //Si la letra ya existe se cambia el valor de la variable letraErrorAlready a verdadero.
        } 
    }
    //If para saber que la letra errada no había sido ya digitada
    if(letraErrorAlready == false){
        arregloErrores.push(letter) //Se agrega la letra a nuestro arreglo de errores
        errores++ //Se incrementa nuestro contador de errores
        mostrarErrores.textContent = "ERRORES: " + arregloErrores
    }

    //If para saber si ya llegamos a los 6 errores y mostrar el mensaje de perdedor
    if(errores==6){
        ganarPerder.textContent = "Perdiste, la palabra era: " + randomWord
        entrada.blur()
        clearInterval(enfocarse)
    }

    //regresar la variable a false
    letraErrorAlready = false

    console.log(errores)

    //Ir mostrando la imagen del ahorcado correspondiente al error.
    ahorcadoImages[errores].style.visibility = "visible"
}

//Función cuando aciertas una letra.
function acertar(letra){
    letter = letra

    //For para validar si la letra ya existe en el arreglo de letras encontradas.
    for(let x = 0; x<randomWordArray.length; x++){
        if(letter==randomWordHiddenArray[x]){
            letraAlready = true //Si la letra ya existe se cambia el valor de la variable letraAlready a verdadero.
        } 
    }

    //Si la letra no existe en las que ya se habían encontrado entonces se hace el barrido.
    if(letraAlready == false){
            //For para comparar letra por letra.        
        for(let x = 0 ; x < randomWordArray.length ; x++){
            //If para poner la letra en arreglo y subir nuestro contador de letras correctas
            if(letter==randomWordArray[x]){
                randomWordHiddenArray[x] = letter
                correctas ++
            } 
        }
    }

    //regresando la variable a false para que no afecte la funcionalidad.
    letraAlready = false

    randomWordHidden = randomWordHiddenArray.join("")
    palabra.textContent = randomWordHidden
    
    //If para mostrar mensaje de ganador si es que se completa la palabra.
    if(correctas==randomWordArray.length){
        ganarPerder.textContent = "FELICIDADES, GANASTE"
        entrada.blur()
        clearInterval(enfocarse)
    }
}

//Función para validar si la letra introducida está o no en la palabra escondida.
function validacion(letter){
    letter = letter

    //For para hacer un barrido en toda la palabra y comparar la letra con cada una de las letras de la palabra.
    for(let x = 0 ; x < randomWordArray.length ; x++){
        if(letter==randomWordArray[x]){
            correcto = true //Si coincide se cambia nuestra variable correcto a verdadero,
        } 
    }

    //Dependiendo el valor de la variable correcto entra a la función acertar o errar.
    if(correcto){
        acertar(letter)
    } else{
       errar(letter)
    }
    correcto = false
}

//funcion para tomar el valor de la tecla presionada, checar si es una letra del alfabeto y si no mostrar un mensaje. También imprime en el html
// la letra para que el usuario la vea.
function imprimir (e){
    //If general para saber si el codigo de la tecla tecleada corresponder a alguna letra del alfabeto o a la ñ en Mayuscula o Minuscula.
    if((e.which >= 65 && e.which<=90)||(e.which >= 97 && e.which<=122)||e.which==209||e.which==241){
        //If para identificar si es letra del alfabeto maysucula e imprimir el valor del arreglo Alfabeto antes creado. Corresponden a las letras.
        if(e.which >= 65 && e.which<=90){
            tecla = alfabeto[e.which-65]
            oprimir.textContent = tecla
        }
        //If If para identificar si es letra del alfabeto minuscula e imprimir el valor del arreglo Alfabeto antes creado. Corresponden a las letras.
        if(e.which >= 97 && e.which<=122){
            tecla = alfabeto[e.which-97]
            oprimir.textContent = tecla
        }
        //If para identificar si es la letra eñe en mayuscula o minuscula e imprimirla.
        if(e.which==209||e.which==241){
            tecla = alfabeto[26]
            oprimir.textContent = tecla
        }
        validacion(tecla)
    } else {
        alert("RECUERDA QUE SOLO PUEDES TECLEAR LETRAS")
    }
}

//funcion para enfocarse siempre en la entrada que recibe las letras.
function focus(){
    entrada.focus()
}

function agregandoPalabra(){
    if(newWord.value!=""){
        let wordArray = newWord.value.split("")
        console.log(wordArray)
        let aprobada = false
        let espacio = false
        let noLetra = false
        
        for(let x = 0; x < wordArray.length ; x++){
            if((wordArray[x].charCodeAt() >= 65 && wordArray[x].charCodeAt()<=90)|| wordArray[x].charCodeAt()==209){
                aprobada = true
                }
             else {
                if(wordArray[x].charCodeAt()==32){
                    espacio=true
                } else{
                    noLetra = true
                } 
            }
        }

        if(aprobada==false){
            if(espacio==true && noLetra == true){
                alert("RECUERDA USAR SOLO LETRAS Y SIN ESPACIOS")
            } else{
                if(espacio==true){
                    alert("RECUERDA NO USAR ESPACIOS")
                }
                if(noLetra==true){
                    alert("RECUERDA USAR SOLO LETRAS")
                }
            }
        }

        for(let x = 0; x < arregloPalabras.length ; x++){
            if(newWord.value==arregloPalabras[x]){
                alert("Esta palabra ya existe")
            }
        }

        if(aprobada==true){
            arregloPalabras.push(newWord.value)
            console.log(arregloPalabras)
        }

        } else {
        alert("ESCRIBE UNA PALABRA")
        }
}


aleatorio() //Llamada a la función para sortear las palabras, se hace cada vez que empezamos el juego.
lineas.textContent = guiones //Impresión de los guiones debajo de las palabras.

entrada.focus() //Enfocarse en el input cada que empiece la página
console.log(arregloPalabras)

entrada.addEventListener('keypress',imprimir) //Llamada a la función cada vez que se oprima una tecla. Se checará si la letra es tecla
//y si está dentro del alfabeto, de otra forma se mostrará una alerta.

var enfocarse = setInterval(focus,1) //Llamada a la función para enfocarse en nuestro input que recibirá las letras.

palabra.textContent = randomWordHidden
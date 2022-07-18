//Declaración de variables

var progres = 100/3;  //Porcentaje de la barra, serán 3 niveles, inicia en 100/3 % --> 33.3333%
var num1_left = 40;   //Espaciado del número izquierdo
var num2_right = 40;  //Espaciado del número derecho
var contador = 1;     //Nivel de EL
setInterval(function bucle(){  //setInterval --> llama una función cada cierto tiempo
    contador ++;        //Aumenta el nivel
    progres += 100/3;   //Aumenta el progreso de la barra en 100/3 % --> 33.3333%
    num1_left -= 10;     //Aumenta la separación entre números
    num2_right -= 20;    //Aumenta la separación entre números
    if(contador<4){     //Contról para bucle, para que nivel solo llegue hasta 3
        //Visualización del progreso de barra, distancia entre números y nivel actual
        document.getElementById("item").style.width = progres+"%";
        document.getElementById("num1").style.marginLeft = num1_left + "%";
        document.getElementById("num2").style.marginRight = num2_right + "%";
        document.getElementById("nivel").innerText = "EL "+contador+"/3 Nivel";
    }else{
        //Reseteo de valores, permite iniciar el bucle de nuevo
        document.getElementById("nivel").innerText = "EL 1/3 Nivel";
        document.getElementById("item").style.width = "33.3333333%";
        document.getElementById("num1").style.marginLeft = "40%";
        document.getElementById("num2").style.marginRight = "40%";
        contador = 1
        progres = 100/3;
        num1_left = 40;
        num2_right = 40;
    }
}, 6000); //Se repite cada 6 segundos

//Generador de números aleatorios

setInterval(function generar(){
    let num = Math.floor(Math.random()*9 + 1)  //Aleatorio para número izquierdo en intervalo [1,9]
    let num1 = Math.floor(Math.random()*10)    //Aleatorio para número derecho en intervalo [0,9]
    document.getElementById("num1").innerText = num  //Reemplaza los valores
    document.getElementById("num2").innerText = num1
}, 1500); //Se repite cada 1.5 segundos
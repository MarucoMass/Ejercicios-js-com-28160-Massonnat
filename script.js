// DESAFIO COMPLEMENTARIO PARA 7/2

// let compra = prompt("Elige que vas a comprar: remera a $6000, jean a $8000 o campera a $10000");
// let dia = prompt("Elige un dia de la semana para saber cuanto descuento te corresponde");
// const remera = 6000;
// const jean = 8000;
// const campera = 10000;
   
//     switch (dia) {
//         case "lunes":
//             if (compra === "remera") {
//                 console.log(`El lunes hay un 25% de descuento. La remera te saldría $${remera - (remera * 25 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El lunes hay un 25% de descuento. El jean te saldría $${jean - (jean * 25 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El lunes hay un 25% de descuento. La campera saldría $${campera - (campera * 25 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "martes":
//             if (compra === "remera") {
//                 console.log(`El martes hay un 15% de descuento. La remera te saldría $${remera - (remera * 15 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El martes hay un 15% de descuento. El jean te saldría $${jean - (jean * 15 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El martes hay un 15% de descuento. La campera saldría $${campera - (campera * 15 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "miercoles":
//             if (compra === "remera") {
//                 console.log(`El miercoles hay un 30% de descuento. La remera te saldría $${remera - (remera * 30 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El miercoles hay un 30% de descuento. El jean te saldría $${jean - (jean * 30 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El miercoles hay un 30% de descuento. La campera saldría $${campera - (campera * 30 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "jueves":
//             if (compra === "remera") {
//                 console.log(`El jueves hay un 20% de descuento. La remera te saldría $${remera - (remera * 20 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El jueves hay un 20% de descuento. El jean te saldría $${jean - (jean * 20 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El jueves hay un 20% de descuento. La campera saldría $${campera - (campera * 20 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "viernes":
//             if (compra === "remera") {
//                 console.log(`El viernes hay un 10% de descuento. La remera te saldría $${remera - (remera * 10 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El viernes hay un 10% de descuento. El jean te saldría $${jean - (jean * 10 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El viernes hay un 10% de descuento. La campera saldría $${campera - (campera * 10 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "sabado":
//             if (compra === "remera") {
//                 console.log(`El sabado hay un 35% de descuento. La remera te saldría $${remera - (remera * 35 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El sabado hay un 35% de descuento. El jean te saldría $${jean - (jean * 35 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El sabado hay un 35% de descuento. La campera saldría $${campera - (campera * 35 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         case "domingo":
//             if (compra === "remera") {
//                 console.log(`El domingo hay un 40% de descuento. La remera te saldría $${remera - (remera * 40 /100)}`);
//             } else if (compra === "jean") {
//                 console.log(`El domingo hay un 40% de descuento. El jean te saldría $${jean - (jean * 40 /100)}`);    
//             } else if (compra === "campera") {
//                 console.log(`El domingo hay un 40% de descuento. La campera saldría $${campera - (campera * 40 /100)}`);      
//             } else {
//                 console.log("Compra no válida");
//             }
//             break;
//         default:
//             alert("Ingrese un día válido");
//             break;
//     }

////////////////EJERCICIOS DE FOR///////////////////////////////

//         let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= ingresarNumero; i++) {
//     let resultado = i + " " + "Hola";
//     console.log(resultado);
// }

// let ingresaNumero = parseInt(prompt("Ingresá un número así repasamos las tablas"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresaNumero * i;
//     console.log(`${ingresaNumero} x ${i} = ${resultado}`);
// }



////////////////////////EJERCICIOS DE WHILE//////////////////////////////////

// let ingresaNumero = parseInt(prompt("Estoy pensando en un número del 1 al 100, cuál es?"));
// while (ingresaNumero != 37) {
//     ingresaNumero = parseInt(prompt("Te equivocaste, probá otra vez"));
//     console.log(ingresaNumero);
// }

//////////////WHILE CON UN CONDICIONAL///////////////
// let ingresaTexto = prompt("Ingresá la palabra mágica para detener el bucle");
// let vuelta = 0;
// while (ingresaTexto != "ESC") {
//     vuelta++;
//     console.log(ingresaTexto);
//     console.log(vuelta);
//     ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Probá con otra");
//     if (vuelta == 1) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Una pista: la palabra se escribe entera con mayúscula");
//     } else if (vuelta == 3) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Una pista: la palabra se encuentra del lado superior izquierdo de tu teclado");
//     } else if (vuelta == 5) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Esta es tu última chance");
//         break;
//     }
// }


//////////EJERCICIO CON UN DO WHILE////////////////////////////
// let ingresaTexto = prompt("Ingresá la palabra mágica para detener el bucle");
// let vuelta = 0;
// do {
//     vuelta++;
//     console.log(ingresaTexto);
//     console.log(vuelta);
//     ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Probá con otra");
//     if (vuelta == 2) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Una pista: la palabra se escribe entera con mayúscula");
//     } else if (vuelta == 4) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Una pista: la palabra se encuentra del lado superior izquierdo de tu teclado");
//     } else if (vuelta == 6) {
//         ingresaTexto = prompt(ingresaTexto +" "+ "no es la palabra mágica. Esta es tu última chance");
//         break;
//     } 
// } while (ingresaTexto != "ESC");

//###################################################################################
//###################################################################################
//###################################################################################

///////////////////////// DESAFIO ENTREGABLE PARA MIERCOLES 9/2 /////////////////////
// hice una pequeña calculadora
// let entrada;
// let cuenta = 0;
// let cuentaSuma = 0;
// let cuentaResta = 0;
// let cuentaDiv = 0;
// let cuentaMulti = 0;
// // let entrada = prompt("Vamos a hacer unas cuentas? Ingresá 'si' o 'no'");
// const suma = (num1, num2) => num1 + num2;
// const resta = (num1, num2) => num1 - num2;
// const division = (num1, num2) => num1 / num2;
// const multiplicacion = (num1, num2) => num1 * num2;

// while(entrada != "no"){
//     if (cuenta < 1) {
//         ingresarNumero = parseInt(prompt("¿Hacemos unas cuentas? Ingresá un número"));  
//     } else {
//         ingresarNumero = parseInt(prompt("Ingresá un número"));  
//     }
// let ingresarNumeroSeg = parseInt(prompt("Ingresá otro número"));
// if (isNaN(ingresarNumero) || isNaN(ingresarNumeroSeg)) {
//     alert("Ingresá un número válido");
// } else {
//     let ingresarOp = prompt("Ingresá una operación (+, -, / o *)");
//        switch (ingresarOp) {
//            case "+":
//                 alert(`El resultado es ${suma(ingresarNumero, ingresarNumeroSeg)}`);
//                 cuenta++;
//                 cuentaSuma++;
//                 break;
//             case "-":
//                 alert(`El resultado es ${resta(ingresarNumero, ingresarNumeroSeg)}`);
//                 cuenta++;
//                 cuentaResta++;
//                 break;
//            case "/":
//                 alert(`El resultado es ${division(ingresarNumero, ingresarNumeroSeg)}`);
//                 cuenta++;
//                 cuentaDiv++;
//                 break;
//             case "*":
//                 alert(`El resultado es ${multiplicacion(ingresarNumero, ingresarNumeroSeg)}`);
//                 cuenta++;
//                 cuentaMulti++;
//                 break;
//            default:
//                alert("Ingresá una operación valida")
//                break;
//        }
//        entrada = prompt("¿Querés hacer otra cuenta?");
// }
// if (entrada == "no") {
//     alert(`Hiciste en total ${cuenta} cuenta/s. ${cuentaSuma} suma/s, ${cuentaResta} resta/s, ${cuentaDiv} division/es y ${cuentaMulti} multiplicacion/es`)
// }
// }

// PRUEBA //
// const nombres = ["Raul", "Jorge", "Miriam", "Anselmo", "Braulio"];
// let ingresaNombre = prompt(`A quién vas a borrar de la lista? \n${nombres.join(", ")}`);

// const borrarNombres = (nombre) => {
//     let index = nombres.indexOf(nombre);
//     if (index !== -1) {
//         nombres.splice(index, 1)
//     }
// }
// borrarNombres(ingresaNombre);
// console.log(nombres);

//###################################################################################
//###################################################################################
//###################################################################################

//////////////////////// DESAFIO COMPLEMENTARIO 16/02 ///////////////////////////////
let entrada;
let ingresarNumero;
let ingresarNumeroSeg;
let ingresarOp;
let resultado;
let cuenta = 0;
let cuentaSuma = 0;
let cuentaResta = 0;
let cuentaDiv = 0;
let cuentaMulti = 0;
const arrSumaTotal = [];
const arrRestaTotal = [];
const arrDivTotal = [];
const arrMultiTotal = [];

const preguntaNumero = () => {
    if (cuenta < 1) {
       ingresarNumero = parseInt(prompt("¿Hacemos unas cuentas? Ingresá un número"));  
    } else {
        ingresarNumero = parseInt(prompt("Ingresá un número"));  
    }
        ingresarNumeroSeg = parseInt(prompt("Ingresá otro número")); 
}      
      
const preguntaOperacion = () => {
    while (isNaN(ingresarNumero) || isNaN(ingresarNumeroSeg)) {
        alert("Ingresá un número válido");
        preguntaNumero();
    }
    do {
        ingresarOp = prompt("Ingresá una operación (+, -, / o *)");
        switch (ingresarOp) {
            case "+":
                resultado = ingresarNumero + ingresarNumeroSeg;
                cuenta++;
                cuentaSuma++;
                const arrSuma = [ingresarNumero, ingresarOp, ingresarNumeroSeg, "=", resultado];
                arrSumaTotal.push(arrSuma.join(" "));
                 break;
             case "-":
                resultado = ingresarNumero - ingresarNumeroSeg;
                cuenta++;
                cuentaResta++;
                const arrResta = [ingresarNumero, ingresarOp, ingresarNumeroSeg, "=", resultado];
                arrRestaTotal.push(arrResta.join(" "));
                 break;
            case "/":
                resultado = ingresarNumero / ingresarNumeroSeg;
                cuenta++;
                cuentaDiv++;
                const arrDiv = [ingresarNumero, ingresarOp, ingresarNumeroSeg, "=", resultado];
                arrDivTotal.push(arrDiv.join(" "));
                 break;
             case "*":
                resultado = ingresarNumero * ingresarNumeroSeg;
                cuenta++;
                cuentaMulti++;
                const arrMulti = [ingresarNumero, ingresarOp, ingresarNumeroSeg, "=", resultado];
                arrMultiTotal.push(arrMulti.join(" "));
                 break;
            default:
                alert("Ingresá una operación valida")
                break;
        }
    } while (ingresarOp !== "+" && ingresarOp !== "-" && ingresarOp !== "/" && ingresarOp !== "*");

}

const mostrarTotal = () => {
    alert(`El resultado es ${resultado}`)
    entrada = confirm("¿Querés hacer otra cuenta?");
    
    if (entrada === false) {
    alert(`Hiciste en total ${cuenta} cuenta/s:
    \n ${cuentaSuma} suma/s
    \n ${cuentaResta} resta/s
    \n ${cuentaDiv} division/es
    \n ${cuentaMulti} multiplicacion/es`)

    alert(`Estas fueron las cuentas que hiciste:
    \n Sumas: ${arrSumaTotal.join(" | ")}
    \n Restas: ${arrRestaTotal.join(" | ")}
    \n Divisiones: ${arrDivTotal.join(" | ")}
    \n Multiplicaciones: ${arrMultiTotal.join(" | ")}`);
    } else {
        init();
    }  
}

const init = () => {
    preguntaNumero();
    preguntaOperacion();
    mostrarTotal();
}
init();







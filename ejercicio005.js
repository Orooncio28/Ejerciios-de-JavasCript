/*
Programa una función que invierta las palabras de una
cadena de texto, pe. miFuncion("Hola Mundo") devolverá
 "odnuM aloH".
 */
 
 function miFuncion(mensaje){
    let newMensaje ="";
    for(let i = mensaje.length-1; i >= 0;i--){
        newMensaje = newMensaje + mensaje[i];
    }
    console.log(newMensaje);
   }
   miFuncion("Estamos Desarrollando unas Pruebas");

   // otra solucion

const invertirCadena = (cadena="")=>
(!cadena)
    ?console.warn("La cadena esta Vacia")
    :console.info(cadena.split("").reverse().join("")); 

invertirCadena("hola mUndo");
invertirCadena();
/*
Programa una función que te devuelva el texto recortado según
 el número de caracteres indicados, pe. 
 miFuncion("Hola Mundo",   4) devolverá "Hola".
 */
//mi solucion
 /*function miFuncion(cadena, num){
    let newCadena = ""
    for (let i=0; i<num;i++) {
        newCadena = newCadena + cadena[i];
        }
    console.log(newCadena)
    }
miFuncion("Hola Mundo", 4)*/

//otra solucion

const recortarTexto = (cadena="", longuitud = undefined)=>
    (!cadena)
        ?console.warn("No Ingresaste una cadena de texto")
        :(longuitud === undefined)
            ?console.warn("No Ingresaste la longuitud para cortar el texto")
            :console.info(cadena.slice(0,longuitud));

recortarTexto("Hola Mundo", 4); 
recortarTexto(); 
recortarTexto("Hola Mundo"); 
recortarTexto("", 5); 


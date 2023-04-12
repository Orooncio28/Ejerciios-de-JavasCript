/*
Programa una función que dada una String te devuelva un
 Array de textos separados por cierto caracter, pe. 
 miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].
 */
 /*function miFuncion(mensaje,separador){    
    let arreglo = mensaje.split(" ");
        console.log(arreglo);
    }    
miFuncion("hola que tal", " ");*/

//otro metodo
const construirArreglo =(cadena="", separador = undefined)=>
    (!cadena)
    ?console.warn("La cadena esta Vacia")
    :(separador === undefined)
        ?console.warn("No ingresate el separador ")
        :console.info(cadena.split(" "));

construirArreglo("Hola que tal", " ");
construirArreglo("Pedro Perez es un estudiante");
construirArreglo("Pedro Perez es un estudiante","/");
construirArreglo();


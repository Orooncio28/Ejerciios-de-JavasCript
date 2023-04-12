/*
  Programa una función que cuente el número de caracteres de 
una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
// mi solucion
/*function contarCaracteres(mensaje){
    console.log(mensaje.length);
}
contarCaracteres("Hola Mundo");*/

//Otra solucion
/*
function contarCaracteres(cadena=""){
  if(!cadena){
    console.warn("No Ingresate ninguna cadena");
  }else{
    console.info(`LA CADENA: "${cadena}" TIENE ${cadena.length} CARACTERES`)
  }
}

contarCaracteres();
contarCaracteres("Hola Mundo")*/

// Solucion con funcion expresada y arrow funcition

const contarCaracteres = (cadena="")=>
//operador ternario de if else en una sola linea de codigo partido en tres:
  (!cadena)?
    console.warn("No Ingresate ninguna cadena"):
    console.info(`LA CADENA: "${cadena}" TIENE ${cadena.length} CARACTERES`);

contarCaracteres();
contarCaracteres("Como te llamas, cuentame:");

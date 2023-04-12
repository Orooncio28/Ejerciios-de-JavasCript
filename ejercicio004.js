/*
Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
/*
function miFuncion(mensaje,num){
    let newMensaje ="";
    for(let i=0; i < num; i++){
        newMensaje = newMensaje + mensaje + " ";
    }
    console.log(newMensaje);
   }
   miFuncion("Hola Mundo", 3);*/

// otro metodo de hacerlo

const repetirTexto = (cadena="",veces = undefined)=>{
    if(!cadena) return console.warn("No Ingresaste una cadena de texto");

    if(veces === undefined) return console.warn("Debes indicar el numero de repeticiones");

    if(veces === 0) return console.error("el numero de veces NO PUDE SER 0");

    if(Math.sign(veces) === -1) return console.error("el numero de veces NO PUDE SER NEGATIVO");
        
        for(let i=1; i <= veces; i++) console.info(`${cadena} ${i}`);
}
   
repetirTexto("Hola como te llamas", 7);
repetirTexto("", 7);
repetirTexto("Hola como te llamas", 0);
repetirTexto("Hola como te llamas", -5);
repetirTexto("Hola como te llamas");
repetirTexto();


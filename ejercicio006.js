/*
Programa una función para contar el número de veces que
 se repite una palabra en un texto largo, pe. miFuncion("hola
  mundo adios mundo", "mundo") devolverá 2.
  */
 // mi solucion
 /* 
const encontrarPalabra= (texto = "", palabra = "") =>{
    if(!texto) return console.warn("No Ingresaste una texto");
    if(!palabra) return console.warn("No Ingresaste una palbra a buscar");
    
    let textoArray = texto.split(" "),
        contador =0;
        for(i=0; i < textoArray.length; i++) {
            if(textoArray[i] === "cosas") {
                contador= contador +1;
            } 
        }
        return console.info(`En el Texto: "${textoArray.join(" ")}" se repite la palabra: "${palabra}"  "${contador}" veces`);  
}

encontrarPalabra("las cosas que un debe hacer, no son cosas de este mundo de cosas", "cosas");
*/
// otro metodo

const encontrarPalabra= (texto = "", palabra = "") =>{
    if(!texto) return console.warn("No Ingresaste un texto o frase");
    if(!palabra) return console.warn("No Ingresaste una palabra a buscar");

    let i = 0,
    contador = 0;

    while(i !== -1){
        i = texto.indexOf(palabra, i);
         if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`En el Texto: "${texto}" se repite la palabra: "${palabra}"  "${contador}" veces`); 
    }
    encontrarPalabra("las cosas que un debe hacer, no son cosas de este mundo de cosas", "cosas");
    encontrarPalabra();
    encontrarPalabra("texto");

/*
 Programa una función para convertir grados Celsius a
 Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
const convertirGrados = (grados="", tipo="")=>{
    if(!grados) return console.warn("Debe ingresar la cantidad de grados a converir");
    if(typeof grados!== "number") return console.error(`Ingrese un Valor numerico a convertir`);
    if(!tipo)console.warn(`Ingrese tipo = "F" Fahrenheit o "C" par Celsius`);
    let valor = 0;
    if(tipo === "c"){
        valor =(grados *9/5) +32;
        return console.info(`${grados} ºC son: ${valor} Fahrenheit`);
    }valor = (grados -32) *5/9;
    return console.info(`${grados} ºF son: ${valor} Celcius`);
}

convertirGrados(0,"C");
convertirGrados(30,"C");
convertirGrados(81,"F");
convertirGrados(95,"F");


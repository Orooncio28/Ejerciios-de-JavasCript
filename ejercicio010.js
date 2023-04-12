/*
Programa una función que reciba un número y evalúe 
si es capicúa o no  (que se lee igual en un sentido 
que en otro), pe. miFuncion(2002) devolverá true.
*/
const capicua = (num="")=>{
    if(!num) return console.warn("No Ingresaste numero");
    if(typeof num === "string") return console.error("No puedes ingresar un STRING");
    palabra =num.toString();
    let alReves = palabra.split("").reverse().join("");
    return (alReves === palabra)
        ?console.info(`Si es CAPICUA, el numeor origial es: "${palabra}" el numero al reves: "${alReves}"`)
        :console.info(`No es CAPICUA, el numero origial es: "${palabra}" el numero al reves: "${alReves}"`);
}

capicua(2002);
capicua();
capicua("perro");
capicua(50035);
capicua(212.212);
capicua(2002);
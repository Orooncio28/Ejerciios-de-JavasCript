/*
Programa una función que determine si un número es par
 o impar, pe. miFuncion(29) devolverá Impar.
 */
const tipoNumero = (num = undefined)=>{
    if(num === undefined) return console.warn("debe ingresar un numero");
    if(typeof num!== "number") return console.error(`El valor ingresado "${num}" no es un numero`);
    if(num === 0) return  console.info(`El numero: "${num}" por Regla es PAR`);
    (num % 2 === 0)
        ?console.info(`El numeor: "${num} es PAR`)
        :console.info(`El numeor: "${num} es IMPAR`);
}

tipoNumero(5);
tipoNumero(10);
tipoNumero();
tipoNumero("cosas");
tipoNumero(0);
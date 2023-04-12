/*
Programa una función que determine si un número es
 primo (aquel que solo es divisible por sí mismo y 1) o 
 no, pe. miFuncion(7) devolverá true.
 */

 const  numeroPrimo =(num="")=>{
    if(!num) return console.warn("debe ingresar un numero");
    if(typeof num!== "number") return console.error(`El valor ingresado "${num}" no es un numero`);

    for(let i = 2,raiz=Math.sqrt(num); i <= raiz; i++)
    (num % i === 0)
        ?console.info(`False ${num} NO ES PRIMO`)
        :console.info(`True ${num} ES PRIMO`)

 }
 numeroPrimo(7);
 numeroPrimo();
 numeroPrimo(10);
 numeroPrimo(30);
 numeroPrimo("cosas");
    
 
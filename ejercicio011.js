/*
Programa una función que calcule el factorial de un número (El factorial
 de un entero positivo n, se define como el producto de todos los números 
 enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */
const factorial = (num = undefined)=>{
    if(num === undefined) return console.warn("Por Favor ingresa un numero");
    
    if(typeof num!== "number") return console.error(`El ingreso de: "${num}" NO ES UN NUMERO`);
    
    if(num === 0) return  console.info(`El factorial de "${num}" por Regla es: "1"`);
   
    if(Math.sign(num) === -1) return console.error(`Vaores NEGATIVOS "${num}" NO SON ADMITIDOS`);
    
        let valor = 1
        for(let i = 1; i <= num;i++){
            valor *= i;
        
        }
        console.info(`factorial de ${num} = ${valor}`);
} 

factorial();
factorial(5);
factorial(1);
factorial("Cosas");
factorial(0);
factorial([1,2,3]);
factorial("5");
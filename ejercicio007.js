/*
 Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro),
  pe. mifuncion("Salas") devolverá true.
  */
 // mi solucion
 const palabraPalindromo = (palabra="")=>{
    if(!palabra) return console.warn("No Ingresaste una texto");
    let newPalabra = palabra.split("").reverse().join("");
        if(newPalabra === palabra){           
           return console.info(`es true la palabra "${palabra}" es un PALINDROMO "${newPalabra}"`);
        }
        return console.info(`false la palabra "${palabra}" NO ES UN PALINDROMO `);
    }
 
// palabraPalindromo("salas");
// palabraPalindromo();
// palabraPalindromo("solos");
// palabraPalindromo("medianos");

// solucion Profesor

const palindrome =(palabra="")=>{
   if(!palabra) return console.warn("No Ingresaste una palabra o frase");

   palabra =palabra.toLowerCase();
   let alReves = palabra.split("").reverse().join("");
   return (alReves === palabra)
      ?console.info(`Si es PALINDROME, la palabra original: "${palabra}" palabra al reves: "${alReves}"`)
      :console.info(`No es PALINDROME, la palabra original: "${palabra}" palabra al reves: "${alReves}"`);
}

palindrome("Salas");
palindrome();
palindrome("solos");
palindrome("medianos");

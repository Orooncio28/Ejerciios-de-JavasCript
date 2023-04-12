/*
 Programa una función que elimine cierto patrón de caracteres
 de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
  devolverá  "1, 2, 3, 4 y 5.
  */
 //no lo puede resolver
 /*
 const eliminarCaracter =(texto="", patron="")=>{
    if(!texto) console.warn("Debes introducir un texto");
    if(!patron) console.warn("Debes introducir un patron");
    let i = 0,
    
    
    
 }   
 eliminarCaracter("xyz1 xyz2 xyz3 xyz4 xyz5", "xyz");*/

 // solucion dada profesor

 const eliminarCaracteres = (texto="", patron="")=>{
   (!texto)
   ?console.warn("No ingresaste le texto")
   :(!patron)
      ?console.warn("No colocaste el patron de caracteres")
      :console.info(texto.replace(new RegExp(patron,"ig"),""));
 }
eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
 eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");



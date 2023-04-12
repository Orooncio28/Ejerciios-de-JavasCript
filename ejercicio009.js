/*
Programa una función que obtenga un numero aleatorio entre 501 y 600
*/
const numeroAleatorio = (min = "", max = "")=> {
    if (!min)return console.warn("No colocastes el numero menor");
    if(!max) return console.warn("coloque el numero mayor");          
        console.info(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)));

}
numeroAleatorio(501,600);
numeroAleatorio(20,22);
numeroAleatorio("",600);
numeroAleatorio("cosas", "perro");
    
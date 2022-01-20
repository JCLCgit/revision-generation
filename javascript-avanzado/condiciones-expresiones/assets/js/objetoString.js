let cadena1="hola";
console.log(cadena1);

let cadena2= new String('Adios');//objeto String
console.log(cadena2);

let arreglo=new Array();
console.log(arreglo);

console.log(cadena2.toLocaleLowerCase().includes('a'));
//convierte a minus y mayus
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());


//Cohersión y conversión
//cohersión = Javascript convierte en automático un tipo de dato en otro

console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida */
let palabra='Hola Mundo';
let arreglo4=palabra.split('');
/* console.log(arreglo4);

console.log(arreglo4.reverse().join("")); */

function invertirPalabra(cadena){
    let arreglo5=cadena.split("");//conviritiendo la cadena a un arerglo
    arreglo5.reverse();//invirtiendo arreglo
    let cadenaInvertida=arreglo5.join("");
    /* return console.log(cadenaInvertida); */
    return document.write(cadenaInvertida);
}

invertirPalabra(prompt('Dame una palabra a invertir'));



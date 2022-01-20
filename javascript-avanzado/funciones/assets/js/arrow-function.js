/*  Arrow function
    Función de flecha

*/

/* function sumar(numero1,numero2){

    return numero1+numero2;
} */
//es equivalente a la función de arriba
const sumar=(numero1,numero2) =>{
    return numero1 + numero2;
}
let numero1=parseInt(prompt('Dame el #1'));
let numero2=parseInt(prompt('Dame el #2'));
let suma= sumar(numero1,numero2);
document.write(`La suma de ${numero1} y de ${numero2} es ${suma} <br>`);
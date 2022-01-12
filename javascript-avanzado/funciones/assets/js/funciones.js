/* Funcion
Es un bloque de código reutilizable.
Puede tener o no parámetros de entrada.
Puede devolver o no un valor.  
*/

function sumar(numero1, numero2){
    //operaciones o código a ejecutar
    return (numero1 +numero2);
    
}

function restar(numero1,numero2){
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1-numero2} <br>`);
}

let numero1=parseInt(prompt('Dame el #1'));
let numero2=parseInt(prompt('Dame el #1'));
let suma= sumar(numero1,numero2);

//template string es lo que está en la línea 19
// ` backstick o comilla invertida 
document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
restar(numero1,numero2);
document.write('La suma de '+ numero1 + 'y ' + numero2+ 'es '+suma );
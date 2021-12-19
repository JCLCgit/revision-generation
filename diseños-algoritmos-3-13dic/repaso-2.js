/* 
arreglos
 */

const comidas= ['Pozole', 'Quesadillas', 'tacos'];
console.log(comidas.length);
/* 
push    agrega al final
pop     quita un elemento del final
unshift     agrega elemento al principio    
shift       quita elemento del principio
*/

comidas.push('Tortas');
console.log(comidas);
comidas.unshift('Pancita');
console.log(comidas);
comidas.pop();
console.log(comidas);
comidas.shift();
console.log(comidas);
/* 
forEach -->nos puede servir para realizar una acción por cada elemento de nuestro
arreglo
*/
/* console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
 */
comidas.forEach(function(el){
    console.log(el);
})

const numeros= [1,4,7,8];
console.log(numeros);
numeros.forEach(function(el){
    let suma=el+1;
    console.log(suma)
})

console.log(numeros);
/*ejercicio*/
const arreglo=[];

function suma(num){
let sumNum=num+1;
return arreglo.push(sumNum);
}

suma(5);
suma(2);
suma(6);
suma(3);
suma(78);
console.log(arreglo);
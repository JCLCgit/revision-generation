/* 
Colección de elementos
Tienen métodos y funciones que nos permiten ordenar y manipular los datos
almacenados
*/
/* JS puede tener arreglos con diferentes DATOS */
const arreglo1=[4,'hola', true, [1,2,3]];
console.log(arreglo1);

const arreglo2=Array.of(1,'Hola',true);
console.log(arreglo2);

const arreglo3= new Array(3, true, 'adios');
console.log(arreglo3);

const frutas=['manzana', 'naranjas','uvas','sandía',[1,2,3,4,5,['A','B','C']]];
//notación de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);
/* 
Métodos
lenght=longitu
*/
const letras=['A','B','C','D'];
console.log(letras.length);
/* 
push -->añade un elemento al final de nuestro arreglo
*/
letras.push('E');
console.log(letras);
/* 
pop -->elimina un elemento al final de nuestro arreglo
*/
letras.pop();
console.log(letras);
/* 
unshift -->agrega un elemento AL inicio de nuestro arreglo
*/
letras.unshift(1);
console.log(letras);
/* 
shift -->elimina un elemento AL inicio de nuestro arreglo
*/
letras.shift();
console.log(letras);
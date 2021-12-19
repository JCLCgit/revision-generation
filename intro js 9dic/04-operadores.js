/* 
+ sirve para sumar números y concatenar
- sirve para restar números
* sirve para multiplicar 2 números
/ sirve para divir dos números
% sirve para obtener el residuo de una división

*/

let numero1=parseInt(prompt("ingresa NUM 1")) ; /* prompt siempre devuelve un texto
                                                  //PARSEINT convierte texto a numero */
let numero2=parseInt(prompt("ingresa NUM 2")) ;
const suma=numero1+numero2;
const resta=numero1-numero2;
const multi=numero1*numero2;
const division=numero1/numero2;


console.log("Este es el num1-->"+ numero1);
console.log("Este es el num2-->"+ numero2);
console.log("Esta es la suma-->"+(numero1 + numero2));
console.log("Esta es la suma-->"+suma);
console.log("Esta es la resta-->"+resta);
console.log("Esta es la multi-->"+multi);
console.log("Esta es la division-->"+division);
console.log(5%2);
/* 
Operadores Lógicos
&& AND (Y)
|| OR (O)
! NOT(NO)

*/
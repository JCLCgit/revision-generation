/*Ciclos=bucles=loops
while
do while
for
*/

/* WHILE 
let condicion=1;  --->valor inicial
while(condicion)
{
código
modificación a nuestro valor inicial
}
*/

/*  Imprimir todos los números del 1 al 10 
*/
/* let condicion=1;
while(condicion<=10)
{
    console.log(condicion);
    condicion++;
    //condicion=condicion+1;
} */

//*********DO WHILE********************** */
let numero1=1;

do 
{
    console.log(numero1);
    numero1++;
}while(numero1<=10);

/* CICLO FOR 
utiliza un contador
*/
for (let control = 1; control <= 10; control++) {
    
    console.log(control);
}

const comidas=['Pozole','tacos','tamales','tortas'];

for(i=0;i<comidas.length;i++)
{
    console.log("Este es el menu-->"+comidas[i]);
}
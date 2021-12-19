/* 
condicionales

if(condicion)
{
    bloque
}
else if(condicion)
{
bloque
}
else
{
}
*/
/* 
FUNCIÓN es un bloque de código reutilizable 

function nombre(parametros)
{
    return
}
nombre(argumentos);
*/

function procesadorDeFrutas(manzanas,naranjas)
{
    let jugo='Jugo de '+ manzanas+' manzanas y'+ naranjas +' naranjas';
    return jugo;
}

let jugo_manzana=procesadorDeFrutas(5,0);
console.log(jugo_manzana);
let jugo_naranja=procesadorDeFrutas(0,12);
console.log(jugo_naranja);
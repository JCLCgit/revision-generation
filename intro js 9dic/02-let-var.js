/* Anteriormente se usaba var para declarar variables, son variables globales */
/* variable let solamente es una variable de contexto, sólo vive en un bloque del código 
let hace referencia a una variable local y sólo se puede acceder a ella desde el bloque en el que se encuentre, es decir afuera de { } es como si no existiera

*/
var numero=40;
console.log(numero);
if(true)
{
    var numero=50;
    console.log(numero);
}
console.log(numero);

var texto='bootcamp JAva';
console.log(texto);
if(true)
{
    let texto='Cohorte 8';
    console.log(texto);
    let numero_favorito=19;
}
console.log(texto);
console.log(numero_favorito)





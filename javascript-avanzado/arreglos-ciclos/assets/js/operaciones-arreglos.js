let numeros = [1, 3, 13, 23, 532,328,123,6865,812,213,123 ];

/* numeros.forEach(function(elemento){
    document.write(elemento + ',');
}); */

/* recorre todos los elementos del arreglo */
numeros.forEach(element => {
    document.write(element + ', <br>');
});
/* hace un nuevo arreglo con la misma información del otro */
let numeros2=numeros.map(function(elemento){
    return elemento;
});

document.write('<br>'+numeros2);

/* let frutas=['mango','uva','piña'];
let frutas2=frutas;
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');

frutas2.push('pera');
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>'); */

//***************************/

/* let frutas=['mango','uva','piña'];
let frutas2=frutas.map(function(elemento){
    return elemento;
});
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');

frutas2.push('pera');
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>'); */

/* let numeros = [1, 3, 13, 23, 532,328,123,6865,812,213,123 ];
let numeros2=numeros.map(function(elemento){
    return (elemento*2);
});

document.write(numeros+'<br>');
document.write(numeros2+'<br>'); */

/* INCLUDES */
document.write('<br>'+numeros.includes(328)+'<br>');


/* FILTER */
let numerosPares=numeros.filter((elemento)=>{
    if(elemento%2==0){
        return true;
    }
    else{
        return false;
    }
    
    /* return elemento%2==0; */ 
    // es lo mismo que el if-else
});


let frutas = ['mango','uva', 'piña','mandarina','manzana','aguacate','sandia'];
let frutasFiltro = frutas.filter((fruta)=>{
    if(fruta.includes('i') == true){
        return true;
    }
});
document.write( `<br>${frutasFiltro}<br>`);

/* SORT */

let otrosNumeros=[9,2,3,5,1,4,8,6,7];
document.write('<br>'+otrosNumeros.sort()+'<br>');

/* REVERSE */
document.write('<br>'+numeros.reverse()+'<br>');

/* FIND obtiene el primer elemento que cumple con la condición*/
let frutaEncontrada=frutas.find((elemento)=>{
    return elemento.toLowerCase().includes('ma');
});

document.write('<br>'+frutaEncontrada+'<br>');
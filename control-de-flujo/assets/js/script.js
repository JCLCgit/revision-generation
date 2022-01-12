/* Flujo orden en que se ejecutan las declaraciones */

let miVariable=10;
console.log(miVariable);
/* Estructuras de control de flujo */

/* let edad=18;
let tienesINE=true;

if (edad >=18 && tienesINE==true){
    console.log('Puedes entrar');
} */
//-------------------
let edad=17;
let tienesINE=true;

if (edad >=18 || tienesINE==true){
    console.log('Puedes entrar');
}
else{
    console.log('No puede entrar');
}

/* Operador ternario */
/* (Condición  a evaluar)?  se ejecuta si es verdadero: se ejecuta si es falso;*/

let edad1=17;
(edad>=18)?console.log('Mayorde edad'):console.log('Menor de edad');

/* se puede asignar un operador ternario a una variable */
let pregunta=(edad>=18)?console.log('Mayorde edad'):console.log('Menor de edad');

console.log(pregunta);

let preguntaEdad=`Tengo ${edad}años y soy ${(edad>=18)?"MAYOR":"MENOR"} de edad`;
console.log(preguntaEdad);


let dia=5;
if(dia===0){
    console.log('Domingo');
}
else if(dia===1){
    console.log('Lunes');
}
else if(dia===2){
    console.log('Martes');
}
else if(dia===3){
    console.log('Miércoles');
}
else if(dia===4){
    console.log('Jueves');
}
else if(dia===5){
    console.log('Viernes');
}
else if(dia===6){
    console.log('Sábado');
}
else{
    console.log('Ese no es un día');
}
//Switch - case
/* 
Switch(variable a evaluar){
    case valor:
        -código a ejecutar-
    break;

     case valor:
        -código a ejecutar-
    break;
    
    default:-código a ejecutar si sale de las opciones-
    break;
}
*/

switch(dia){
    case 0:
        console.log('Es domingo');
    break;
    case 1:
        console.log('Es lunes');
    break;
    case 2:
        console.log('Es martes');
    break;
    case 3:
        console.log('Es miércoles');
    break;
    case 4:
        console.log('Es jueves');
    break;
    case 5:
        console.log('Es viernes');
    break;
    case 6:
        console.log('Es sábado');
    break;
    default:
        console.log('No es un día');
    break;
}

let cuponDescuento;
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento=5;
    break;
    case 'Plata':
        descuento=10;
    break;
    case 'Oro':
        descuento=15;
    break;
    default:console.log('Cupón erróneo');
}
console.log(descuento);
/* CÓDIGO Síncrono*/

let variableSincrona;
variableSincrona=10*3;
console.log(variableSincrona);

/* CÓDIGO ASINCRONO */
let variableAsincrona;

setTimeout(()=>{
    variableAsincrona=10*4;
    console.log(variableAsincrona);
},2000);

console.log(variableAsincrona);
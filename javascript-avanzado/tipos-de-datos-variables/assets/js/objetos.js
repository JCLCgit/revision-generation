/* let miObjeto={
    //pares de clave valor
    nombre: 'Juan Carlos'
} */

let nombre='Juan Carlos';
let edad=27;
let direccion="Unión, Escandón";
let numero= 19;

console.log(nombre);

let persona ={
    nombre:'Juan Carlos',
    edad:27,
    /* direccion:"Unión, Escandón", */
    
    direccion:{
        ciudad:'CDMX',
        alcaldia:'MH',
    },
    /* numero: 19, */
    numero:[
        5271,
        1608,
        19
    ]
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion.ciudad);
console.log(persona.numero[2]);

let carro={
    marca:'ford',
    modelo: [1960,1961,1962,1963,1964],
    color:{
        color1:'azul',
        color2:'rojo',
    },
    estado:{
        estado1:'nuevo',
        estado2:'usado',
    },
    origen:{
        op1:'USA',
        op2:'MX',
        op3:'BR',
    }
};
console.log(carro.origen.op3)
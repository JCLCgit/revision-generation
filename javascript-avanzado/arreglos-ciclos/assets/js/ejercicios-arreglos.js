let arreglo=new Array;
let promedio=0;
/* for(let i=0;i<=19;i++){
    arreglo[i]=contador*2;
    contador++;
} */
for(let i=0;i<=19;i++){
    arreglo[i]=Math.floor(Math.random()*5);
}

for(let i=0;i<=19;i++){
    promedio+=arreglo[i];
    
}

document.write(arreglo+'<br>');
document.write(`La suma es: ${promedio} <br>`);
document.write(`El promedio es: ${promedio/arreglo.length}`);

//
let arreglo2=new Array(10);
array.forEach(element => {
    
});

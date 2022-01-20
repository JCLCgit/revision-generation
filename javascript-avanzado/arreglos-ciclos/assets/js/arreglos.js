/* const numeros = [5]; */
let numeros = new Array();
numeros =[1,24,6,4,5,23,45,];

document.write(numeros);
document.write(numeros[5]);

for(let i=0;i<numeros.length;i++){
    document.write(`Elemento ${i}: ${numeros[i]} <br>`);
}


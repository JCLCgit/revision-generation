/* Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 
    27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
 */

const arreglo1=[1,4, 7, 9, 19, 15, 46, 27, 40, 123],resultado=[];

for(let i=0;i<arreglo1.length;i++)
{
    resultado[i]=arreglo1[i]*2;
}

for(let i=0;i<arreglo1.length;i++)
{
    console.log("ESTE ES EL RESULTADO-->"+resultado[i]);
}
for(let i=0;i<arreglo1.length;i++)
{
    document.write(" <h1> ESTE ES EL RESULTADO--> </h1> "+resultado[i]);
}
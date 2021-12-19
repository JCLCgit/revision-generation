/* Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
 */

function rebaja(monto)
{   let descuento;

    if(monto<99 && monto>.1)
    {
        descuento=monto* .9;
        document.write("ESTE ES TU TOTAL A PAGAR--> ", descuento);
    }
    else if (monto>=100 && monto<199)
    {
        descuento=monto* .8;
        document.write("ESTE ES TU TOTAL A PAGAR--> ", descuento);
    }
    else if(monto>=200)
    {
        descuento=monto* .7;
        document.write("ESTE ES TU TOTAL A PAGAR--> ", descuento);
    }
    else 
    { 
        document.write("ERROR DE MONTO");
    }
   
   
}

let monto=parseInt(prompt("MONTO A PAGAR"));
rebaja(monto);

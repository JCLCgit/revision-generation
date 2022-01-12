let precio=document.getElementById('precio');
let cupon=document.getElementById('cupon');
let respuesta=document.getElementById('respuesta');
let descuento;
function operar(){
    switch(cupon){
        case 'bronce':
            descuento=precio*0.95;
            respuesta.textContent=`El precio original era  $ ${precio} y el precio con descuento aplicado es de ${descuento} `;
        break;
        case 'plata':
            descuento=(precio*0.90);
            console.log(respuesta.textContent=`El precio original era  $ ${precio} y el precio con descuento aplicado es de ${descuento} `);
        break;
        case 'oro':
            descuento=precio*0.80;
            respuesta.textContent=`El precio original era  $${precio} y el precio con descuento aplicado es de ${descuento} `;
        break;
        case 'platino':
            descuento=precio*0.75;
            respuesta.textContent=`El precio original era  $${precio} y el precio con descuento aplicado es de ${descuento} `;
        break;
        default:
            respuesta.textContent=`Error`;
        break;
    }
}

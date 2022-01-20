
function operar(){
    let precio=parseInt(document.getElementById('precio').value);
    let cupon=document.getElementById('cupon').value;
    let respuesta=document.getElementById('respuesta');
    let descuento;
    switch(cupon){
        case "bronce":
            descuento=precio*0.95;
            document.getElementById('respuesta').innerHTML=`El precio era $${precio} y el precio con descuento aplicado es $${descuento}`;
            
        break;
        case 'plata':
            descuento=(precio*0.90);
            respuesta.textContent=`El precio era $${precio} y el precio con descuento aplicado es $${descuento}`;
        break;
        case 'oro':
            descuento=precio*0.80;
            respuesta.textContent=`El precio era $${precio} y el precio con descuento aplicado es $${descuento}`;
        break;
        case 'platino':
            descuento=precio*0.75;
            respuesta.textContent=`El precio era $${precio} y el precio con descuento aplicado es $${descuento}`;
        break;
        default:
            respuesta.textContent=`Error`;
        break;
    }
}

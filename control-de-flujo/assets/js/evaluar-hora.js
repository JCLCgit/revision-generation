/* Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */

function operar(){
    let hora=parseInt(prompt('Dame la hora'));
    let mensaje=document.getElementById('anuncio');
    if(hora>=6 && hora<=11){
        
        mensaje.textContent=('Buenos días ser humano');
        alert('Buenos días ser humano');
        
    }
    else if(hora>=12 && hora<=18){
        mensaje.textContent='Buenas tardes ser humano';
        alert('Buenas tardes ser humano');
    }
    else if(hora>=19 && hora<=23){
        mensaje.textContent='Buenas noches ser humano';
        alert('Buenas noches ser humano');
    }
    else{ 
        mensaje.textContent='Déjame dormir';
        alert('Déjame dormir');
    }

}





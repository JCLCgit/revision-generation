
function juego(){
    let number= parseInt(document.getElementById('ingresar').value);
    let condicion=50;
        
    let diferencia=Math.abs(condicion-number);

    if(number===condicion){
       document.write('Felicidades campeón');
       
    }
    else if(diferencia<=5){
        
        document.write('Calienteeee');
    }
    else if(diferencia<=10){
        document.write('Caliente');
    }
    else if(diferencia<=20){
        document.write('Tibio');
    }
    else if(diferencia<=30){
        document.write('Frío');
    }
    else{
        document.write('Congelado');
    }


}
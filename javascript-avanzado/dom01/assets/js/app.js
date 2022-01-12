let title = document.getElementById('title')


title.textContent='Este texto está escrito desde Javascript';
console.log(title);

let parrafos =document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[0].textContent="Nuevo texto"; */

/* for(let i=0;i<parrafos.length;i++){
    parrafos[i].textContent='Párrafo-'+ i +"Cambio de conteido desde JS";
} */

let email=document.getElementById('email');
let password=document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}
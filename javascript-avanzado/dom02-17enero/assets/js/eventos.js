let $titulo=document.querySelector('#titulo');
let $mensaje=document.querySelector('#mensaje');
let $btnMensaje=document.querySelector('#btnMensaje');
let $spanError=document.querySelector('span')

/* addEventListener agrega un evento al elemento */
$btnMensaje.addEventListener('click',()=>{
    console.log('No me presiones');
});

$mensaje.addEventListener('keyup',(e)=>{
    console.log(e.target.value);  /* nos recupera-captura los contenidos de ese evento */
    if(e.target.value.length<3){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }
    else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
    /* console.log(e); */
    /* console.log('escribiste algo'); */
});

/* OTRA OPCIÓN OJO,  a la forma de usar la función en el método */

/* $mensaje.addEventListener('keydown', mostrarConsole);

function mostrarConsole(){
    console.log('escribiste algo');
} */
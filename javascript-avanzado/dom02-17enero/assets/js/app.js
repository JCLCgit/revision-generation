/* let titulo=document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent='Título escrito desde JS'; */

/* let $titulo = document.querySelector('p'); por etiquetas
let $titulo = document.querySelector('.contenedor'); clases
let $titulo = document.querySelector('#titulo'); IDs*/ 

let $titulo = document.querySelector('#titulo');
$titulo.textContent='título escrito desde JS';

let $parrafo=document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos=document.querySelectorAll('p');
console.log($parrafos[1].textContent);


let subtitulo=document.createElement('h3');
subtitulo.textContent='Hola subtitle desde JS';
//document.body.append agrega un elemento al final del body
document.body.append(subtitulo);



let $contenido=document.querySelector('#contenido');
/* console.log($contenido.textContent='<br>'); */
//console.log($contenido.innerHTML='<br>');//cambia el contenido, CAMBIOs dentro del elemento
//console.log($contenido.outerHTML='Hola');//hacern el cambio al contenido y se llevan a la etiqueta

let contenidoParrafo=document.createElement('p');
contenidoParrafo.textContent='Contenido  de mi nuevo párrafo';
$contenido.appendChild(contenidoParrafo);
/* Esto es para agregar dentro un elemento */



$titulo.insertAdjacentElement("afterend",subtitulo);
$titulo.remove();


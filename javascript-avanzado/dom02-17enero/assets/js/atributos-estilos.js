let $titulo=document.querySelector('#titulo');
let $texto=document.querySelector('.texto');
$texto.id='texto';/* se agregó ID */
/* $texto.style='color:red; font-size:24px';
 */
$texto.className='bg-purple';
$texto.className='h3 bg-purple';//AGREGAR Varias clases

$texto.classList.add('text-center');//AÑADE
$texto.classList.remove('bg-purple');
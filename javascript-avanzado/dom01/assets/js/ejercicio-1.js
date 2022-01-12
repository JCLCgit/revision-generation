let nombre=document.getElementById('nombre')
function cambioNombre(){
    let usuario=prompt('Hola humano', 'Eva o Adán');
    nombre.textContent='Hola '+usuario;
}


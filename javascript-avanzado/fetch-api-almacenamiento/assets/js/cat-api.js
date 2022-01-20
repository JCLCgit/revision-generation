let $btnGato=document.querySelector('#btnGato');

$btnGato.addEventListener('click',()=>{
    
    fetch('https://api.thecatapi.com/v1/images/search').then(respuesta => respuesta.json()).then(data =>{
        console.log(data);

        let imagenGatito= document.createElement('img');
        imagenGatito.src=data[0].url;
        document.body.appendChild(imagenGatito);
    })

    fetch('https://dog.ceo/api/breeds/image/random').then(respuesta => respuesta.json()).then(data =>{
        console.log(data);

        let imagenGatito= document.createElement('img');
        imagenGatito.src=data.message;
        document.body.appendChild(imagenGatito);
    })

});

/* 
respuesta => respuesta.json()
trae un returno IMPLÍCITO


function (respuesta{
    respuesta.json()
})
*/

//********************
/* $btnGato.addEventListener('click',()=>{
    
    fetch('https://dog.ceo/api/breeds/image/random').then(respuesta => respuesta.json()).then(data =>{
        console.log(data);

        let imagenGatito= document.createElement('img');
        imagenGatito.src=data.message;
        document.body.appendChild(imagenGatito);
    })

}); */
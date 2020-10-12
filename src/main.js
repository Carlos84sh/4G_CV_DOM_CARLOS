require('./style.css')
    //foto de perfil
    const divphoto = document.querySelector('#photo')
    const img = document.createElement('IMG');
    const src = img.src="https://placebear.com/g/200/200";
    img.style.width='200px';
    img.style.width='200px';
    img.style.margin='0auto';
    img.style.borderRadius = "150px";

    //Información de perfil
    const data = {Nombre:'Carlos Sánchez Huelves',
                    Telefono:'633362477',
                    Correo:'cs.huelves@gmail.com'};
    
    const personal = document.querySelector('#personal')



window.onload = function() {    
    divphoto.appendChild(img)
   
}



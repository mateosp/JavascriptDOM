// // querySelector

// const heading = document.querySelector('.header__texto h2') // 0 o 1 elemento
// heading.textContent = 'Nuevo Heading';
// console.log(heading);

// // querySelectorAll

// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);

// enlaces[0].textContent = "Nuevo texto para enlace";
// enlaces[0].classList.add('nueva-clase');
// // enlaces[0].classList.remove('navegacion__enlace') 

// // getElementById

// const heading2 = document.getElementById('heading');
// console.log(heading2)

// //generrar un nuevo enlace
// const nuevoEnlace = document.createElement('A');
// nuevoEnlace.href = 'nuevo-enlace.html';
// nuevoEnlace.textContent = 'Nuevo Enlace';
// nuevoEnlace.classList.add('navegacion__enlace');
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace)


// console.log(nuevoEnlace);

// //eventos

// window.addEventListener('load', function(){
//     console.log(2)
// });

// window.onload = function(){
//     console.log(3)
// };

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4)
// })

// console.log(5)

// window.onscroll = function(){
//     console.log('scrolling...')
// }

//seleccionar elementos 

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('submit', function(evento){
//     console.log(evento)
//     evento.preventDefault();

//     //validar formulario

    
//     console.log("enviando formulario" );

// });


//eventos de input

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//eventos de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar formulario
    const {nombre, email, mensaje} = datos; 

    if (nombre === '' || email === '' || mensaje === ''){
        mostrarError('todos los campos son obligatorios');

        return;
    };

    //enviar formulario
    mostrarMensaje('Formulario enviado con exito')
});

function leerTexto(e){
    // console.log(e.target.value)
    datos[e.target.id] = e.target.value
    // console.log(datos)
};


function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() =>{
        error.remove();
    }, 5000)
}

function mostrarMensaje(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto')

    formulario.appendChild(correcto)

    setTimeout(() => {
        correcto.remove()
    }, 5000);
}
/*  SEGUNDA PARTE CON JAVASCRIPT- DOM Scripting , seleccionar, crear y modoficar documentos HTML y eventos*/
/* 
                //querySelector retorna ninguno o hasta un elemento
const heading = document.querySelector('.header_texto h2');
heading.textContent = 'Nuevo Heading';
console.log(heading);

                                //querySelectorAll retorna 0 hasta todos los elementos que le asignemos
const enlaces = document.querySelectorAll('.navegacion-footer a');
const enlaces2 = document.querySelectorAll('.navegacion a');
enlaces2[0].textContent = "Nuevo enlace";
// enlaces2[0].classList.add('Nueva-Clase'); Agrega una clase
// enlaces2[0].classList.remove('Nueva-Clase'); Elimina una clas
console.log(enlaces2);

                                            //getElementById casi ya no se usa
const headding2 = document.getElementById('header_texto-id');
console.log(headding2);


                                        //createElement sirve para crear contenido HTML
const nuevoEnlace = document.createElement('A'); //Se recomienda poner en mayuscula la etiqueta cuando se usa createElement()
//Agregar enlace
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al documento
const nav = document.querySelector('.navegacion')
nav.appendChild(nuevoEnlace); //.appendChild() "agrega al hijo" me sirve para agregar un elemento a una parte especifica del documento de html
console.log(nuevoEnlace);



                                        //EVENTOS en JavaScript
window.addEventListener('load', //ESpera a que lo archivos JS y html esten listos
function (){console.log(2)});

window.onload = function(){//Se presenta ya que toda la pagina  se a cargado
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Solo espera a que cargue el htmml lo demas como css o JS no le importa
    console.log(4);
});
console.log(5);

/* window.onscroll = function() {
    console.log('scrolling...');
} */

                                 //Seleccionar elementos y asociarles un evento
                        //Usar evento click para el resto e elementos diferentes a formularios
/* const btnEnviar = document.querySelector('.boton__primario');
btnEnviar.addEventListener('click', evento => {
    evento.preventDefault();
    console.log(evento);
    console.log('Enviando formulario');
});
*/

                            //Eventos del input y textarea
                                //Seleccion de elementos
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');
    const boton = document.querySelector('.boton-form');

    const datos = {
        nombre: '',
        email: '',
        mensaje: ''
    }
    nombre.addEventListener('input', leerTexto);
    email.addEventListener('input', leerTexto);
    mensaje.addEventListener('input', leerTexto);

                                  //Validaciion de formulario
            //  USO DE SUBMIT
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){ //Usar submit siempre en un formulario
    evento.preventDefault();
    const {nombre, email, mensaje} = datos;
    if (nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta el codigo si la condicion no se cumple
    } 
            mostrarAlerta('Datos enviados correctamente');     
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}
function mostrarAlerta(mensaje, error = null){ //Siempre colocar un valor por defecto
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
        
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 3000);
} 

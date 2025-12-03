//console.log("El sistema está listo.");
//alert("Bienvenido al sistema.");

const boton = document.getElementById("btn-imprimir");
boton.addEventListener("click", function() {
    window.print();
});

const fecha = new Date();
const hora = fecha.getHours();
const elementoSaludo = document.getElementById("saludo");

if (hora < 12) {
    elementoSaludo.textContent = "Buenos días";
}else if (hora <18){
    elementoSaludo.innerText = "Buenas tardes";
}else {
    elementoSaludo.innerText = "Buenas noches";
}

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const boton = formulario.querySelector(".btn-enviar");
    const TextoOriginal = boton.innerText;

    boton.innerText = "Enviando...";
    boton.style.backgroundColor = "#95a5a6";

    settimeout(function() {
        boton.innerText = "Mensaje Enviado";
        boton.style.backgroundColor = "#27ae60";

        formulario.reset();

        settimeout(() => {
            boton.innerText = TextoOriginal;
        }, 3000);
    }, 2000);
});

const btnTema = document.getElementById("btn-tema");
const body = document.body;

btnTema.addEventListener("click", function() {
    body.classList.toggle("oscuro");

    if (body.classList.contains("oscuro")) {
        btnTema.innerText = "☀️";
    } else {
        btnTema.innerText = "🌙";
    }
});


const textoFrase = document.getElementById("frase-texto");
const autorFrase = document.getElementById("frase-autor");
const botonFrase = document.getElementById("btn-nueva-frase");

async function obtenerFrase() {

    textoFrase.innerText = "Cargando...";
    autorFrase.innerText = "";
    botonFrase.disabled = true;
    
    try{
        const respuesta = await fetch ("https://dummyjson.com/quotes/random");
        const datos = await respuesta.json();
        textoFrase.innerText = `"${datos.quote}"`;
        autorFrase.innerText = `- ${datos.author}`;
    }catch (error){
        textoFrase.innerText = "Error al cargar la frase.";
        console.error("Error al obtener la frase:", error);
    } finally {
        botonFrase.disabled = false;
    }
    }

document.addEventListener("DOMContentLoaded", obtenerFrase);
botonFrase.addEventListener("click", obtenerFrase);

const botonMenu = document.getElementById('menu-movil');
const listaMenu = document.getElementById('menu-lista');

botonMenu.addEventListener('click', function(){
    listaMenu.classList.toggle('activado');
});

const enlacesMenu = document.querySelectorAll('.menu-navegacion a');

enlacesMenu.forEach(enlace =>{
    enlace.addEventListener('click', function(){
        if(listaMenu.classList.contains('activado')){
            listaMenu.classList.remove('activado');
        }
    });
});
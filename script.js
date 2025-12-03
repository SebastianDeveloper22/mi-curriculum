/* =========================================
1. MENÚ HAMBURGUESA (Móvil)
   ========================================= */
const botonMenu = document.getElementById('menu-movil');
const listaMenu = document.getElementById('menu-lista');

// Abrir/Cerrar menú al tocar el icono
botonMenu.addEventListener('click', function() {
    listaMenu.classList.toggle('activado');
});

// Cerrar menú al tocar un enlace
const enlacesMenu = document.querySelectorAll('.menu-navegacion a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        if (listaMenu.classList.contains('activado')) {
            listaMenu.classList.remove('activado');
        }
    });
});

/* =========================================
2. MODO OSCURO CON MEMORIA (localStorage)
   ========================================= */
const btnTema = document.getElementById('btn-tema');
const body = document.body;

// A. Al cargar: Checar memoria
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'oscuro') {
    body.classList.add('oscuro');
    btnTema.innerText = "☀️"; // Icono de sol para volver a luz
}

// B. Al hacer clic: Cambiar y Guardar
btnTema.addEventListener('click', function() {
    body.classList.toggle('oscuro');

    if (body.classList.contains('oscuro')) {
        // Activó modo oscuro
        btnTema.innerText = "☀️";
        localStorage.setItem('tema', 'oscuro');
    } else {
        // Volvió a modo claro
        btnTema.innerText = "🌙";
        localStorage.setItem('tema', 'claro');
    }
});

/* =========================================
3. API FRASE DEL DÍA
   ========================================= */
const textoFrase = document.getElementById('frase-texto');
const autorFrase = document.getElementById('frase-autor');
const botonFrase = document.getElementById('btn-nueva-frase');

async function obtenerFrase() {
    textoFrase.innerText = "Buscando sabiduría...";
    autorFrase.innerText = "";
    botonFrase.disabled = true;
    
    try {
        const respuesta = await fetch('https://dummyjson.com/quotes/random');
        const datos = await respuesta.json();
        
        textoFrase.innerText = `"${datos.quote}"`;
        autorFrase.innerText = `- ${datos.author}`;
    } catch (error) {
        textoFrase.innerText = "Error de conexión.";
        console.error(error);
    } finally {
        botonFrase.disabled = false;
    }
}

// Cargar al inicio y al hacer clic
document.addEventListener('DOMContentLoaded', obtenerFrase);
if(botonFrase) {
    botonFrase.addEventListener('click', obtenerFrase);
}

/* =========================================
4. BOTÓN VOLVER ARRIBA
   ========================================= */
const btnArriba = document.getElementById('btn-arriba');

window.addEventListener('scroll', function() {
    // Si bajamos más de 300px, mostrar botón
    if (window.scrollY > 300) {
        btnArriba.classList.add('mostrar');
    } else {
        btnArriba.classList.remove('mostrar');
    }
});

btnArriba.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================
5. FORMULARIO DE CONTACTO
   ========================================= */
const formulario = document.getElementById('formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const botonEnviar = formulario.querySelector('.btn-enviar');
        const textoOriginal = botonEnviar.innerText;

        botonEnviar.innerText = "Enviando...";
        botonEnviar.style.backgroundColor = "#95a5a6";

        setTimeout(function() {
            botonEnviar.innerText = "¡Mensaje Enviado!";
            botonEnviar.style.backgroundColor = "#27ae60";
            formulario.reset();

            setTimeout(() => {
                botonEnviar.innerText = textoOriginal;
                botonEnviar.style.backgroundColor = ""; // Volver al color original (CSS)
            }, 3000);
        }, 2000);
    });
}

/* =========================================
6. SALUDO DINÁMICO
   ========================================= */
const elementoSaludo = document.getElementById('saludo');
if (elementoSaludo) {
    const hora = new Date().getHours();
    if (hora < 12) elementoSaludo.innerText = "Buenos días";
    else if (hora < 19) elementoSaludo.innerText = "Buenas tardes";
    else elementoSaludo.innerText = "Buenas noches";
}
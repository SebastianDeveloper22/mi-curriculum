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
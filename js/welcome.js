// seleccionamos el botón hamburguesa
const toggle = document.getElementById("menu-toggle");

// seleccionamos el menú
const nav = document.getElementById("nav");

// escuchamos el evento click en el botón
toggle.addEventListener("click", () => {

    // agregamos o quitamos la clase "active"
    // esto hace que el menú aparezca o desaparezca
    nav.classList.toggle("active");

}); 

// seleccionamos el elemento del mensaje
const mensaje = document.getElementById("mensaje");

// lo mostramos cambiando su estilo
mensaje.style.display = "block";

// después de 3 segundos lo ocultamos
setTimeout(() => {
  mensaje.style.display = "none";
}, 3000);
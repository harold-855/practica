// welcome.js: interacción básica de la página
// Busca el botón de menú y el menú de navegación por su ID
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const mensaje = document.getElementById("mensaje");

// Solo agrega el evento si el botón existe en la página
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    // Al hacer clic, alternamos la clase "active" para mostrar/ocultar el menú
    nav.classList.toggle("active");
  });
}

// Mostrar un mensaje si existe el elemento correspondiente
if (mensaje) {
  mensaje.style.display = "block"; // Muestra el mensaje cuando se carga la página

  // Después de 3 segundos lo oculta automáticamente
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);
}

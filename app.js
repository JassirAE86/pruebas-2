const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Abrir y cerrar el menú
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("abierto");

  if (menu.classList.contains("abierto")) {
    menuBtn.textContent = "✕ Cerrar";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Cerrar el menú al seleccionar una sección
const enlaces = menu.querySelectorAll("a");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
    menuBtn.textContent = "☰";
  });
});

// Mostrar el año actual en el pie de página
document.getElementById("anio").textContent =
  new Date().getFullYear();

// Formulario de contacto
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    document.getElementById("respuesta").textContent =
      "Completa todos los campos, por favor.";
    return;
  }

  const asunto = encodeURIComponent(
    "Mensaje para el Centro Escolar José Martí"
  );

  const cuerpo = encodeURIComponent(
    "Nombre: " + nombre +
    "\nCorreo: " + correo +
    "\n\nMensaje:\n" + mensaje
  );

  document.getElementById("respuesta").textContent =
    "Se abrirá tu aplicación de correo para preparar el mensaje.";

  window.location.href =
    "mailto:?subject=" + asunto + "&body=" + cuerpo;
});
import "@sass/main.scss";

/* Toggle menú principal (hamburguesa) */
const mainBtn = document.querySelector(".menu__toggle");
const mainMenu = document.getElementById(mainBtn.getAttribute("aria-controls"));

mainBtn.addEventListener("click", () => {
  const open = mainBtn.getAttribute("aria-expanded") === "true";

  // Flip estado ARIA
  mainBtn.setAttribute("aria-expanded", String(!open));
  mainBtn.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");

  // Mostrar/ocultar menú y cambiar icono
  mainMenu.classList.toggle("is-open", !open);
  mainBtn.classList.toggle("is-open", !open); // Activa SVG de la X
});

/* Toggle submenu Idiomas */
const submenuBtn = document.querySelector(".submenu__toggle");
const submenu = document.getElementById(
  submenuBtn.getAttribute("aria-controls")
);

submenuBtn.addEventListener("click", () => {
  const open = submenuBtn.getAttribute("aria-expanded") === "true";

  submenuBtn.setAttribute("aria-expanded", String(!open));
  submenuBtn.setAttribute(
    "aria-label",
    open ? "Abrir idiomas" : "Cerrar idiomas"
  );

  submenu.classList.toggle("is-open", !open);
});

/* Cerrar todo al hacer clic fuera */
document.addEventListener("click", (ev) => {
  /* Submenu */
  if (
    submenu.classList.contains("is-open") &&
    !submenu.contains(ev.target) &&
    !submenuBtn.contains(ev.target)
  ) {
    submenu.classList.remove("is-open");
    submenuBtn.setAttribute("aria-expanded", "false");
    submenuBtn.setAttribute("aria-label", "Abrir idiomas");
  }

  /* Menú hamburguesa */
  if (
    mainMenu.classList.contains("is-open") &&
    !mainMenu.contains(ev.target) &&
    !mainBtn.contains(ev.target)
  ) {
    mainMenu.classList.remove("is-open");
    mainBtn.classList.remove("is-open"); // Vuelve al SVG hamburguesa
    mainBtn.setAttribute("aria-expanded", "false");
    mainBtn.setAttribute("aria-label", "Abrir menú");
  }
});